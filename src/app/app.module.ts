import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { metaReducer, rootReducer } from 'src/store/reducers/root-reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      {
        root: rootReducer,
      },
      { metaReducers: metaReducer }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
