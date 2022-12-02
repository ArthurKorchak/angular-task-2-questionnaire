import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Question } from 'src/app/_core/models/question.model';
import { MainActions } from 'src/app/_core/state/main.actions';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent  {

  @Input() question: Question | null = null;

  constructor(private router: Router, private store$: Store) {}

  public handleDelete() {
    if (this.question) this.store$.dispatch(MainActions.removeQuestion({ id: this.question?.id }));
  };

  public handleEdit() {
    this.router.navigate([`edit/${this.question?.id}`]);
  };

  public dateFormatter(date: number): string {
    return new Date(date).toLocaleString();
  };
};
