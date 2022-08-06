import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Book } from 'src/app/books/models/book.model';
import { AdminUser } from 'src/models/admin-user.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('/api/books').pipe(delay(3000));
  }
}
