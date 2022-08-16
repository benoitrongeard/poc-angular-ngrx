import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './store/reducers/book/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/effects/book/book.effects';
import { RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';

@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBook.booksFeatureKey, fromBook.reducer, {
      metaReducers: fromBook.metaReducers,
    }),
    EffectsModule.forFeature([BookEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: BooksComponent,
      },
    ]),
  ],
})
export class BooksModule {}
