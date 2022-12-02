import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Question } from '../_core/models/question.model'
import { MainActions } from '../_core/state/main.actions';
import { MainSelectors } from '../_core/state/main.selectors';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.scss']
})
export class QuestionEditComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();
  private currentQuestion: Question | undefined = undefined;
  public questionEditForm: FormGroup | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private store$: Store
  ) { };

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
    const newQuestion: Question = {
      id: this.currentQuestion?.id || '',
      text: value.text,
      type: value.type,
      answerVariants: value.answerVariants.filter((item: string) => item),
      answer: null,
      createDate: Date.now(),
      answerDate: null
    };
    this.store$.dispatch(MainActions.editQuestion({ question: newQuestion }));
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

  public ngOnInit(): void {
    this.subscriptions.add(this.store$.select(MainSelectors.questions).subscribe(resp => {
      this.currentQuestion = resp.find(item => item.id === this.route.snapshot.params['id']);
      if (this.currentQuestion) this.questionEditForm = this.fb.group({
        text: this.currentQuestion?.text,
        type: [this.currentQuestion?.type, this.typeValidator()],
        answerVariants: this.fb.array(this.currentQuestion?.answerVariants, this.answerValidator())
      });
    }));
  };

  public ngOnDestroy(): void { 
    this.subscriptions.unsubscribe();
  };
};
