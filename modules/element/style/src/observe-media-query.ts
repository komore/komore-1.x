import { defer, fromEvent, map } from '@komore/reactive';

/**
 * Observes a media query
 *
 * @param query Query
 * @returns Observable media query
 */
export function observeMediaQuery(query: string): Observable<MediaQueryListEvent> {
  return defer(() => {
    const mediaQueryList = window.matchMedia(query);
    return fromEvent(mediaQueryList, 'change');
  }).pipe(map(event => event as MediaQueryListEvent));
}
