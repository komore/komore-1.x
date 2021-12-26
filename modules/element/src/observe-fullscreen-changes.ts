import { isNotNull } from '@komore/functional';
import { fromEvent, map, mapTo, merge, type Observable, throwUnless } from '@komore/reactive';

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
    throwUnless(isNotNull, () => new Error('fullscreen error'))
  );
}
