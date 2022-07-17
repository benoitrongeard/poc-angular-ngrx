import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AdminUser } from 'src/models/admin-user.model';
import { RootActionGroup } from 'src/store/actions/actions';
import * as UsersAction from 'src/store/actions/actions';
import { RootState } from 'src/store/reducers/root-reducer';
import { getUser, getUsers } from 'src/store/selectors/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'start';

  public user$ = {} as Observable<AdminUser>;
  public userList$ = {} as Observable<AdminUser[]>;

  constructor(
    private store: Store<RootState>,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.store.dispatch(RootActionGroup.init());

    this.user$ = this.store.pipe(select(getUser));
    this.userList$ = this.store.pipe(select(getUsers));
  }

  changeUserName(firstname: string) {
    this.store.dispatch(
      RootActionGroup.changeUsername({ firstname: firstname })
    );
  }

  loadUsers() {
    this.store.dispatch(UsersAction.loadUsers());
  }
}
