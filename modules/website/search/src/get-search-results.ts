import type { Observable } from '@komore/reactive';
import { of } from '@komore/reactive';
import type { SearchResult } from './search-result';

/**
 * Gets search results
 * @param searchQuery Search query
 * @returns Search results
 */
export function getSearchResults(_searchQuery: string): Observable<ReadonlyArray<SearchResult>> {
  // TODO: this should be part of the service worker
  return of([]);
}
