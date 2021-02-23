import type { Observable } from '@komore/reactive';
import { fromEvent } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

/**
 * Creates an observable that emits the page visibility state when it changes
 * @returns Observable that emits the page visibility state
 */
export function observePageVisibility(): Observable<VisibilityState> {
  return fromEvent(document, 'visibilitychange').pipe(map(() => document.visibilityState));
}
