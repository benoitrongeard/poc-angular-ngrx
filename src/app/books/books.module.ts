import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './store';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/effects/book/book.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducers, { metaReducers: fromBook.metaReducers }),
    EffectsModule.forFeature([BookEffects])
  ]
})
export class BooksModule { }
