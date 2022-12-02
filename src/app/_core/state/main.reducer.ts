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

  on(MainActions.setState, (_, { questions }) => ({ questions })),

  on(MainActions.addQuestion, (state, { question }) =>
    ({ ...state, questions: [...state.questions, question] })),
  
  on(MainActions.editQuestion, (state, { question }) => {
    const questionIdx = state.questions.findIndex(item => item.id === question.id);
    if (questionIdx === -1) {
      alert('Ooops... question not found');
      return state;
    };
    const changedQuestions = [...state.questions];
    changedQuestions[questionIdx] = question;
    return { ...state, questions: changedQuestions };
  }),

  on(MainActions.removeQuestion, (state, { id }) =>
    ({ ...state, questions: state.questions.filter(item => item.id !== id) })),
);
