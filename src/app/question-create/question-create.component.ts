import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Question } from '../_core/models/question.model';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent {

  public questionCreateForm: FormGroup | null = null;

  constructor(private fb: FormBuilder) { };

  get type(): FormArray {
    return this.questionCreateForm?.get("type") as FormArray;
  };

  get answerVariants(): FormArray {
    return this.questionCreateForm?.get("answerVariants") as FormArray;
  };

  public addVariant(): void {      
    this.answerVariants.push(new FormControl<string>(''));
    this.questionCreateForm?.setErrors({ 'incorrect': true });
  };

  public removeVariant(event: any): void {
    this.answerVariants.removeAt(event.currentTarget.id);
  };

  public submit({value}: FormGroupDirective): void {
    const newQuestion = {
      id: Date.now() + (~~(Math.random() * 1e8)).toString(16),
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

  ngOnInit() {
    this.questionCreateForm = this.fb.group({
      text: null,
      type: [null, this.typeValidator()],
      answerVariants: this.fb.array(['', ''], this.answerValidator())
    });
  };
};
