import { defineElement } from '@komore/element';
import { createEffect } from '@komore/element/store';
import { fromEvent, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { getSearchResults } from './get-search-results';

/**
 * Search input element
 */
export const SearchInputElement = defineElement({
  name: 'search-input',
  styles: ({ css }) => css``,
  template: ({ html }) => html`
    <input type="search" aria-label="search" placeholder="Search"
      [value]="query$ | async"
      @input="${this.search()}"
      @keyup="${this.search()}"
      @focus="${this.search()}"
      @click="${this.search()}">
  `
});

// state: queryString & searchResults
// effects: queryString changes => getSearchResults with debounce

createEffect((queryString$: Observable<string>) => queryString$.pipe(
  switchMap(queryString => getSearchResults(queryString).pipe(
    
  )
)));
