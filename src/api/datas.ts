import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from 'src/app/books/models/book.model';
import { AdminUser } from 'src/models/admin-user.model';

export class Datas implements InMemoryDbService {
  createDb(): Record<string, AdminUser[] | Book[]> {
    const users: AdminUser[] = [
      {
        id: 1,
        firstname: 'John',
        name: 'Doe',
        isAdmin: true,
      },
      {
        id: 2,
        firstname: 'Jane',
        name: 'Art',
        isAdmin: false,
      },
    ];

    const books: Book[] = [
      {
        id: 0,
        author: 'Manner',
        name: 'Le seigneur des anneaux',
        publisher: 'Gallimard',
      },
      {
        id: 1,
        author: 'Manner2',
        name: 'Le seigneur des anneaux 2',
        publisher: 'Gallimard 2',
      },
    ];

    return { users, books };
  }
}
