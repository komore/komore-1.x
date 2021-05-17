import type { Observable } from '@komore/reactive';
import { defer, fromEvent } from '@komore/reactive';

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
