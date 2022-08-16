import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BooksService } from 'src/app/services/books/books.service';
import * as BooksActions from 'src/app/books/store/actions/book/book.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Book } from 'src/app/books/models/book.model';

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.loadBooks),
      mergeMap(() =>
        this.bookService.getBooks().pipe(
          map((books: Book[]) => BooksActions.loadBooksSuccess({ books })),
          catchError((error) => of(BooksActions.loadBooksFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private bookService: BooksService) {}
}
