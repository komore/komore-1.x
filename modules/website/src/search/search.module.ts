import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SearchInputComponent } from './search-input.component';
import { SearchResultsComponent } from './search-results.component';
import { SearchEffects } from './search.effects';
import { searchReducer } from './search.reducer';

/**
 * Search module
 */
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('search', searchReducer),
    EffectsModule.forFeature([SearchEffects])
  ],
  declarations: [SearchInputComponent, SearchResultsComponent],
  exports: [SearchInputComponent, SearchResultsComponent]
})
export class SearchModule {}
