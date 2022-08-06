import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, RootState, UsersState } from '../reducers/root-reducer';

// const selectRoot = (state: RootState) => state.root;
const AppStateSelector = createFeatureSelector<AppState>('root');

const UsersSelector = createFeatureSelector<UsersState>('users');

export const getUser = createSelector(
  AppStateSelector,
  (state: AppState) => state.user
);

export const getUsers = createSelector(
  UsersSelector,
  (state: UsersState) => state.users
);

export const getUsersError = createSelector(
  UsersSelector,
  (state: UsersState) => state.error
 );