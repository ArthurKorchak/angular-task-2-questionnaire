import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MainSelectors } from './_core/state/main.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription = Subscription.EMPTY;
  
  constructor(private store$: Store) { };
  
  public ngOnInit(): void {
  };

  public ngOnDestroy(): void { 
  };
};
