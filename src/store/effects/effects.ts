import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap, of } from 'rxjs';
import { UsersService } from 'src/app/services/users/users.service';
import { AdminUser } from 'src/models/admin-user.model';
import * as UserActions from 'src/store/actions/actions';

@Injectable()
export class AppEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.userService.getAllUsers().pipe(
          map((users: AdminUser[]) => UserActions.loadUsersSuccess({ users })),
          catchError((error: HttpErrorResponse) =>
            of(UserActions.loadUsersError({ error }))
          )
        )
      )
    )
  );
  constructor(private actions$: Actions, private userService: UsersService) {}
}
