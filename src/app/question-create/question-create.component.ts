import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

import { MainActions } from '../_core/state/main.actions';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent {

  public questionCreateForm: FormGroup | null = null;

  constructor(private router: Router, private fb: FormBuilder, private store$: Store) { };

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
    this.store$.dispatch(MainActions.addQuestion({ question: newQuestion }));
    this.router.navigate(['management']);
  };

  private typeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.answerVariants?.value.length === 0 && this.type?.value !== 'open') {
        this.answerVariants.push(new FormControl<string>(''));
        this.answerVariants.push(new FormControl<string>(''));
      };
      if (this.type?.value === 'open' && this.answerVariants.value.length >= 2) this.answerVariants.clear();
      const value = control.value;
      return value ? null : { 'incorrect': true };
    };
  };

  private answerValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      return value?.every((item: string) => item.length || !value.length) ? null : { 'incorrect': true };
    };
  };

  public ngOnInit() {
    this.questionCreateForm = this.fb.group({
      text: null,
      type: [null, this.typeValidator()],
      answerVariants: this.fb.array(['', ''], this.answerValidator())
    });
  };
};
