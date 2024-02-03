import { fromEvent, map, startWith } from '@komore/reactive';

/**
 * Returns an observable that emits the page visibility state when it changes
 *
 * @returns Observable that emits the page visibility state
 */
export function observePageVisibility(): Observable<DocumentVisibilityState> {
  return fromEvent(document, 'visibilitychange').pipe(
    map(() => document.visibilityState),
    startWith(document.visibilityState)
  );
}
