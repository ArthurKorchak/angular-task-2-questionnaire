import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Question } from 'src/app/_core/models/question.model';
import { MainActions } from 'src/app/_core/state/main.actions';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() public question: Question | null = null;
  @Input() public isBlocked: boolean = false;

  public questionForm: FormGroup | null = null;

  constructor(private fb: FormBuilder, private store$: Store) { };

  public answerHandle(form: FormGroupDirective): void {
    if (this.question) {
      const answer = [];
      if (this.question?.type === 'single') {
        answer.push(form.value.single);
      } else if (this.question?.type === 'multiple') {
        form.value.multiple.forEach((item: boolean, idx: number) => {
          if (item) answer.push(this.question?.answerVariants[idx]);
        });
      } else if (this.question?.type === 'open') {
        answer.push(form.value.open);
      };
      const answeredQuestion = {
        ...this.question,
        answer,
        answerDate: Date.now()
      };
      this.store$.dispatch(MainActions.editQuestion({ question: answeredQuestion }));
    };
  };
  
  public toUnansweredHandle(): void {
    if (this.question) {
      const unansweredQuestion = {
        ...this.question,
        answer: null,
        answerDate: null
      };
      this.store$.dispatch(MainActions.editQuestion({ question: unansweredQuestion }));
    };
  };
  
  public dateFormatter(date: number): string {
    return new Date(date).toLocaleString();
  };

  private multipleValidator(question: Question): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (question.type !== 'multiple') return null;
      const value = control.value;
      return !(value.includes(true)) ? { 'incorrect': true } : null;
    };
  };

  public ngOnInit(): void {
    if (this.question?.answerVariants) {
      this.questionForm = this.fb.group({
        single: '',
        multiple: this.fb.array(
          this.question.answerVariants.map(item => {
            return {
              value: !!this.question?.answer?.includes(item),
              disabled: this.isBlocked
            };
          }), this.multipleValidator(this.question)
        ),
        open: ''
      });
    };
  };
};
