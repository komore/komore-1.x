import type { Observable } from 'rxjs';
import { of } from 'rxjs';
import type { SearchResult } from './search-result';
import type { SearchWorkerInput } from './search-worker-input';

/**
 * Executes a search
 * @param input Search worker input
 * @returns Search results
 */
export function executeSearch(input: SearchWorkerInput): Observable<ReadonlyArray<SearchResult>> {
  console.log('[Worker] search', input);
  return of([
    {
      path: '/hello/world',
      score: 4.5,
      snippet: 'heeellooo',
      title: 'Hello World'
    }
  ]);
}
