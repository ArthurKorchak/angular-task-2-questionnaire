import { createReducer, on } from '@ngrx/store';
import { MainActions } from './main.actions';

export interface AppState {
  storeElement: any
};

const initialState: AppState = {
  storeElement: false
};

export const mainReducer = createReducer(
  initialState,
  on(MainActions.storeElement, (state, { storeElement }) => ({
    ...state,
    storeElement
  })),
);