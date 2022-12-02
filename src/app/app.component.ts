import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { LocalStorageService } from './_core/services/local-storage.service';
import { MainActions } from './_core/state/main.actions';
import { MainSelectors } from './_core/state/main.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();
  
  constructor(private store$: Store, private localStorageService: LocalStorageService) { };
  
  public ngOnInit(): void {
    const LSvalue = this.localStorageService.readLS();
    if (LSvalue) this.store$.dispatch(MainActions.setState({ questions: LSvalue }));
    this.subscriptions.add(this.store$.select(MainSelectors.questions).subscribe(resp => {
      this.localStorageService.writeLS(resp);
    }));
  };

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  };
};
