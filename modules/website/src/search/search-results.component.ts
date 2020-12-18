import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchResultModel } from './search-result.model';
import { getResults } from './search.selectors';
import { SearchState } from './search.state';

/**
 * Search results component
 */
@Component({
  selector: 'komore-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  readonly results$: Observable<ReadonlyArray<SearchResultModel>>;

  /**
   * Class constructor
   * @param store Search store
   */
  constructor(store: Store<SearchState>) {
    this.results$ = store.select(getResults);
  }
}
