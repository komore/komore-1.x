import { Observable, of } from 'rxjs';
import { SearchResult } from './search-result';

/**
 * Gets search results
 * @param searchQuery Search query
 * @returns Search results
 */
export function getSearchResults(searchQuery: string): Observable<ReadonlyArray<SearchResult>> {
  // TODO: this should be part of the service worker
  return of([]);
}
