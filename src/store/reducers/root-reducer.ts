import { ActionReducer, createReducer, MetaReducer, on } from '@ngrx/store';
import { AdminUser } from 'src/models/admin-user.model';
import { RootActionGroup } from '../actions/actions';

export interface RootState {
  root: AppState;
}

export interface AppState {
  user: AdminUser;
  users?: AdminUser[];
  appName: string;
}

const initialState: AppState = {
  user: {
    isAdmin: false,
  } as AdminUser,
  appName: 'Test NGRX',
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
