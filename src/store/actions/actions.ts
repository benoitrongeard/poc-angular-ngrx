import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { AdminUser } from 'src/models/admin-user.model';
import { HttpErrorResponse } from '@angular/common/http';

export enum ActionGroupeTypes {
  ROOT = '[Root]',
  USER = '[User]',
}

export enum ActionTypes {
  INIT = 'Init',
  CHANGE_USERNAME = 'Change username',
  LOAD_USERS = 'Load users',
  LOAD_USERS_SUCCESS = 'Load users success',
  LOAD_USERS_FAILURE = 'Load users failure',
}

export const RootActionGroup = createActionGroup({
  source: ActionGroupeTypes.ROOT,
  events: {
    Init: emptyProps(),
    'Change username': props<{ firstname: string }>(),
  },
});

// SANS GROUP
// export const initAction = createAction(ActionTypes.INIT);

// export const changeUsernameAction = createAction(
//   ActionTypes.CHANGE_USERNAME,
//   props<{ firstname: string }>()
// );

export const loadUsers = createAction('Load users');

export const loadUsersSuccess = createAction(
  ActionTypes.LOAD_USERS_SUCCESS,
  props<{ users: AdminUser[] }>()
);

export const loadUsersError = createAction(
  ActionTypes.LOAD_USERS_FAILURE,
  props<{ error: HttpErrorResponse | Error }>()
);
