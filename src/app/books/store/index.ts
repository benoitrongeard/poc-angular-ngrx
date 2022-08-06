import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

export const bookFeatureKey = 'books';

export interface BookState {}

export const reducers: ActionReducerMap<BookState> = {};

export const metaReducers: MetaReducer<BookState>[] = !environment.production
  ? []
  : [];
