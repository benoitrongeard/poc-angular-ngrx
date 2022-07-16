import { createAction, props } from '@ngrx/store';

export const initAction = createAction('Init APP');

export const changeUsernameAction = createAction(
  'Change user name',
  props<{ firstname: string }>()
);
