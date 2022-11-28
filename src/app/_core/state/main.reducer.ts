import { createReducer, on } from '@ngrx/store';
import { Question } from '../models/question.model';
import { MainActions } from './main.actions';

export interface AppState {
  questions: Question[]
};

const initialState: AppState = {
  questions: []
};

export const mainReducer = createReducer(
  initialState,

  on(MainActions.addQuestion, (state, { question }) => ({ ...state, questions: [question, ...state.questions] })),
  
  on(MainActions.editQuestion, (state, { question }) => {
    const questionIdx = state.questions.findIndex(item => item.id === question.id);
    const changedQuestions = state.questions;
    changedQuestions[questionIdx] = question;
    
    return { ...state, questions: changedQuestions };
  }),

  on(MainActions.removeQuestion, (state, { id }) => {
    const changedQuestions = state.questions.filter(item => item.id !== id);

    return { ...state, questions: changedQuestions };
  }),
);
