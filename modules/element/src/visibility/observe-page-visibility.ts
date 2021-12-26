import { fromEvent, map, type Observable, startWith } from '@komore/reactive';

/**
 * Creates an observable that emits the page visibility state when it changes
 * @returns Observable that emits the page visibility state
 */
export function observePageVisibility(): Observable<VisibilityState> {
  return fromEvent(document, 'visibilitychange').pipe(
    map(() => document.visibilityState),
    startWith(document.visibilityState)
  );
}
