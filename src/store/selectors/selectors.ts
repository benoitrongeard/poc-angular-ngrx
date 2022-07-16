import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, RootState } from '../reducers/root-reducer';

// const selectRoot = (state: RootState) => state.root;
const AppStateSelector = createFeatureSelector<AppState>('root');

export const getUser = createSelector(
  AppStateSelector,
  (state: AppState) => state.user
);
