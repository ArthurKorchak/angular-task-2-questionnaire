import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Question } from 'src/app/_core/models/question.model';
import { MainSelectors } from 'src/app/_core/state/main.selectors';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();
  public questions: Question[] = [];

  constructor(private store$: Store) { };

  public ngOnInit(): void {
    this.subscriptions.add(this.store$.select(MainSelectors.questions).subscribe(resp => {
      this.questions = [...resp].sort((a, b) => b.createDate - a.createDate);
    }));
  };

  public ngOnDestroy(): void { 
    this.subscriptions.unsubscribe();
  };
};
