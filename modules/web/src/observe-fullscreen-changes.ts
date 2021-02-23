import type { Observable } from '@komore/reactive';
import { fromEvent, merge } from '@komore/reactive';
import { map, mapTo } from '@komore/reactive/operators';

/**
 * Creates an observable that emits whenever the fullscreen state of an element changes
 * @param element Optional target element
 * @returns Observable that emits whenever the fullscreen state of the element changes
 * @note When no target element is provided, the document element is used
 */
export function observeFullscreenChanges(element?: Element): Observable<Element | undefined> {
  const targetElement = element ?? document;
  return merge([
    fromEvent(targetElement, 'fullscreenchange').pipe(map(() => document.fullscreenElement ?? undefined)),
    fromEvent(targetElement, 'fullscreenerror').pipe(mapTo(null))
  ]).pipe(
    map(event => {
      if (event === null) {
        throw new Error('fullscreen error');
      }

      return event;
    })
  );
}
