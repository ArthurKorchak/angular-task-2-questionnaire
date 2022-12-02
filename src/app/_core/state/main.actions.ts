import { createAction, props } from '@ngrx/store';

import { Question } from '../models/question.model';

export namespace MainActions {

  export const setState = createAction('SET_STATE', props<{ questions : Question[] }>());

  export const addQuestion = createAction('ADD_QUESTION', props<{ question: Question }>());

  export const editQuestion = createAction('EDIT_QUESTION', props<{ question: Question }>());

  export const removeQuestion = createAction('REMOVE_QUESTION', props<{ id: string }>());
};
