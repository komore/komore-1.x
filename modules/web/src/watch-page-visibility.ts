import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Watches for a page's visibility changes
 * @returns Stream of visibility states
 */
export function watchPageVisibility(): Observable<VisibilityState> {
  return fromEvent(document, 'visibilitychange').pipe(map(() => document.visibilityState));
}
