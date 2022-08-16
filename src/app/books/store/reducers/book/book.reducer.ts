import { Action, createReducer, MetaReducer, on } from '@ngrx/store';
import { Book } from 'src/app/books/models/book.model';
import * as BooksActions from 'src/app/books/store/actions/book/book.actions';

export const booksFeatureKey = 'books';

export interface BooksState {
  books: Book[];
}

export const initialState: BooksState = {
  books: [],
};

export const metaReducers: MetaReducer[] = [];

export const reducer = createReducer(
  initialState,
  on(BooksActions.loadBooks, (state: BooksState) => {
    return { ...state };
  }),
  on(BooksActions.loadBooksSuccess, (state: BooksState, props) => {
    console.log('test get load books success');
    return {
      ...state,
      books: props.books,
    };
  })
);
