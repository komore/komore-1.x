import type { Observable } from '@komore/reactive';
import { of } from '@komore/reactive';
import type { SearchQuery, SearchResult } from '@komore/website/search';

/**
 * Executes a search
 * @param query Search Query
 * @returns Search results
 */
export function executeSearch(query: SearchQuery): Observable<ReadonlyArray<SearchResult>> {
  console.log('[Worker] search', query);
  return of([
    {
      path: '/hello/world',
      score: 4.5,
      snippet: 'heeellooo',
      title: 'Hello World'
    }
  ]);
}
