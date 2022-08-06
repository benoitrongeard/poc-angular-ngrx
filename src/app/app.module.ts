import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
// Permet l'import multiple en 1 ligne
import * as RootActions from 'src/store/reducers/root-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from 'src/store/effects/effects';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UsersData } from 'src/api/users.data';
import { HttpClientModule } from '@angular/common/http';
import { BooksModule } from './books/books.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        root: RootActions.rootReducer,
        users: RootActions.usersReducer,
      },
      {
        metaReducers: RootActions.metaReducers,
        runtimeChecks: {
          strictActionTypeUniqueness: true,
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AppEffects]),
    InMemoryWebApiModule.forRoot(UsersData),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
