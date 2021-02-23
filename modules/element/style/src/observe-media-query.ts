import type { Observable } from 'rxjs';
import { defer, fromEvent } from 'rxjs';

/**
 * Observes a media query
 * @param query Query
 * @returns Observable media query
 */
export function observeMediaQuery(query: string): Observable<MediaQueryListEvent> {
  return defer(() => {
    const mediaQueryList = window.matchMedia(query);
    return fromEvent<MediaQueryListEvent>(mediaQueryList, 'change');
  });
}
