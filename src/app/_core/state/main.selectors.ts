import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './main.reducer';

export namespace MainSelectors {
  
  export const allState = createFeatureSelector<AppState>('main');

  export const questions = createSelector(allState, state => state.questions);
};
