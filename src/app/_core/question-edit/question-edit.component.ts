import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { testData } from '../../_core/models/question.model'

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.scss']
})
export class QuestionEditComponent implements OnInit {

  currentQuestion = testData.find(item => item.id === this.route.snapshot.params['id']);

  public questionEditForm: FormGroup | null = null;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { };

  get type(): FormArray {
    return this.questionEditForm?.get("type") as FormArray;
  };

  get answerVariants(): FormArray {
    return this.questionEditForm?.get("answerVariants") as FormArray;
  };

  public addVariant(): void {      
    this.answerVariants.push(new FormControl<string>(''));
    this.questionEditForm?.setErrors({ 'incorrect': true });
  };

  public removeVariant(event: any): void {
    this.answerVariants.removeAt(event.currentTarget.id);
  };

  public submit({value}: FormGroupDirective): void {
    const newQuestion = {
      id: this.currentQuestion?.id,
      text: value.text,
      type: value.type,
      answerVariants: value.answerVariants.filter((item: string) => item),
      answer: null,
      createDate: Date.now(),
      answerDate: null
    };

    console.log(newQuestion)
  };

  private typeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.answerVariants?.value.length === 0) {
        this.answerVariants.push(new FormControl<string>(''));
        this.answerVariants.push(new FormControl<string>(''));
        return { 'incorrect': true };
      };
      if (this.type?.value === 'open') this.answerVariants?.clear();
      const value = control.value;
      return value ? null : { 'incorrect': true };
    };
  };

  private answerValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value?.length >= 2) this.type?.enable();
      return value?.every((item: string) => item.length) ? null : { 'incorrect': true };
    };
  };

  ngOnInit(): void {
    if (this.currentQuestion)
    this.questionEditForm = this.fb.group({
      text: this.currentQuestion?.text,
      type: [this.currentQuestion?.type, this.typeValidator()],
      answerVariants: this.fb.array(this.currentQuestion?.answerVariants, this.answerValidator())
    });
  };
};
