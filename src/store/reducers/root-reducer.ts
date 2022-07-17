import { ActionReducer, createReducer, MetaReducer, on } from '@ngrx/store';
import { AdminUser } from 'src/models/admin-user.model';
import { RootActionGroup } from '../actions/actions';
import * as UsersAction from 'src/store/actions/actions';
import { HttpErrorResponse } from '@angular/common/http';

export interface RootState {
  root: AppState;
}

export interface AppState {
  user: AdminUser;
  appName: string;
}

const initialState: AppState = {
  user: {
    isAdmin: false,
  } as AdminUser,
  appName: 'Test NGRX',
};

export interface UsersState {
  users: AdminUser[];
}

const initialUsersState: UsersState = {
  users: [],
};

function log(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    const currentState = reducer(state, action);

    console.groupCollapsed(action.type);
    console.log('Etat precedent : ', state);
    console.log('Etat suivant : ', currentState);
    console.log(action);
    console.groupEnd();

    return currentState;
  };
}

export const metaReducers: MetaReducer[] = [log];

export const rootReducer = createReducer<AppState>(
  initialState,
  on(RootActionGroup.init, (state: AppState) => {
    return {
      ...state,
      user: {
        ...state.user,
        firstname: 'NONAME',
      },
    };
  }),

  on(RootActionGroup.changeUsername, (state: AppState, props) => {
    return {
      ...state,
      user: {
        ...state.user,
        firstname: props.firstname,
        isAdmin: true,
      },
    };
  })
);

export const usersReducer = createReducer<UsersState>(
  initialUsersState,
  on(UsersAction.loadUsers, (state: UsersState) => {
    return {
      ...state,
    };
  }),

  on(UsersAction.loadUsersSuccess, (state: UsersState, props) => {
    return {
      ...state,
      users: props.users,
    };
  }),

  on(UsersAction.loadUsersError, (state: UsersState, props) => {
    console.log('ERROR GET USERS');
    console.log(props.error);
    return {
      ...state,
    };
  })
);
