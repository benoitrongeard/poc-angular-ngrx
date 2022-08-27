import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksState } from '../../reducers/book/book.reducer';

const BookSelector = createFeatureSelector<BooksState>('books');

export const getBooks = createSelector(
  BookSelector,
  (state: BooksState) => state.books
);
