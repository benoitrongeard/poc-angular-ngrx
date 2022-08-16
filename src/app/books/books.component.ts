import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from './models/book.model';
import { BooksState } from './store/reducers/book/book.reducer';
import * as BooksActions from './store/actions/book/book.actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  // public books$: Observable<Book[]>;

  constructor(private store: Store<BooksState>) {}

  ngOnInit(): void {
    // this.books$ = this.store.select(Books);
  }

  getBooks() {
    this.store.dispatch(BooksActions.loadBooks());
  }
}
