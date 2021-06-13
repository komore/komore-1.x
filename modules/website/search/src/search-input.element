<script>
  import { defineElement } from '@komore/element';
  import { createEffect } from '@komore/element/store';
  import { fromEvent, Observable } from 'rxjs';
  import { switchMap } from 'rxjs/operators';
  import { getSearchResults } from './get-search-results';

  const queryChanged$ = new Subject<string>();

// state: queryString & searchResults
// effects: queryString changes => getSearchResults with debounce

createEffect((queryString$: Observable<string>) => queryString$.pipe(
  switchMap(queryString => getSearchResults(queryString).pipe(
    
  )
)));
</script>
<style>
  :host > input {
    width: 180px;
    transition: width 0.25s ease-in-out;
    -webkit-appearance: none;
    border-style: none;
    outline-style: none;
    background-color: #ffffff;
    border-radius: 16px;
    height: 24px;
    padding: 0px 12px;
  }

  :host > input:focus {
    max-width: 380px;
    width: 380px;
  }
</style>
<search-input>
  <input type="search" aria-label="search" placeholder="Search"
    .value="query$"
    @input="queryChanged$"
    @keyup="queryChanged$">
</search-input>