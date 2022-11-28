import { createAction, props } from '@ngrx/store';

export namespace MainActions {
  export const storeElement = createAction(
    'STORE_ELEMENT',
    props<{ storeElement: any }>()
  );
};