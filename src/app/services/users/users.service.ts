import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { AdminUser } from 'src/models/admin-user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<AdminUser[]> {
    return this.httpClient.get<AdminUser[]>('/api/users').pipe(delay(3000));
  }
}
