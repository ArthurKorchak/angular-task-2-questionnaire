import { createAction, props } from '@ngrx/store';

import { Question } from '../models/question.model';

export namespace MainActions {

  export const addQuestion = createAction('ADD_QUESTION', props<{ question: Question }>());

  export const editQuestion = createAction('EDIT_QUESTION', props<{ question: Question }>());

  export const removeQuestion = createAction('REMOVE_QUESTION', props<{ id: string }>());
};
