import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AdminUser } from 'src/models/admin-user.model';

export class UsersData implements InMemoryDbService {
  createDb(): Record<string, AdminUser[]> {
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
    return { users };
  }
}
