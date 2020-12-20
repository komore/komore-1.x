import { fromEvent, merge, Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

/**
 * Watches for fullscreen changes
 * @param element Optional target element
 * @returns Stream of fullscreen changes
 * @note When no target element is provided, the document element is used
 */
export function watchFullscreenChanges(element?: Element): Observable<Element | undefined> {
  const targetElement = element ?? document;
  return merge(
    fromEvent(targetElement, 'fullscreenchange').pipe(map(() => document.fullscreenElement ?? undefined)),
    fromEvent(targetElement, 'fullscreenerror').pipe(mapTo(null))
  ).pipe(
    map(event => {
      if (event === null) {
        throw new Error('fullscreen error');
      }

      return event;
    })
  );
}
