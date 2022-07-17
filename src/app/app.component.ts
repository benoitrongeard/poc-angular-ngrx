import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AdminUser } from 'src/models/admin-user.model';
import { RootActionGroup } from 'src/store/actions/actions';
import { RootState } from 'src/store/reducers/root-reducer';
import { getUser } from 'src/store/selectors/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'start';

  public user = {} as Observable<AdminUser>;

  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {
    this.store.dispatch(RootActionGroup.init());

    this.user = this.store.pipe(select(getUser));
  }

  changeUserName(firstname: string) {
    this.store.dispatch(
      RootActionGroup.changeUsername({ firstname: firstname })
    );
  }
}
