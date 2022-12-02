import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Question } from 'src/app/_core/models/question.model';
import { MainSelectors } from 'src/app/_core/state/main.selectors';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

  private subscriptions = new Subscription();
  public questions: Question[] | null = null;

  constructor(private store$: Store) { };

  public ngOnInit(): void {
    this.subscriptions.add(this.store$.select(MainSelectors.questions).subscribe(resp => {
      this.questions = resp;
    }));
  };

  public ngOnDestroy(): void { 
    this.subscriptions.unsubscribe();
  };
};
