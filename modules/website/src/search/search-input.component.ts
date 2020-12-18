import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { queryUpdated } from './search.actions';
import { getQuery } from './search.selectors';
import { SearchState } from './search.state';

/**
 * Search input component
 */
@Component({
  selector: 'komore-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @ViewChild('input', { static: true })
  private readonly input!: ElementRef<HTMLInputElement>;

  readonly query$: Observable<string>;

  /**
   * Class constructor
   * @param store Search store
   */
  constructor(private readonly store: Store<SearchState>) {
    this.query$ = store.select(getQuery);
  }

  /**
   * Update the query
   */
  search(): void {
    const query = this.input.nativeElement.value;
    this.store.dispatch(queryUpdated({ query }));
  }
}
