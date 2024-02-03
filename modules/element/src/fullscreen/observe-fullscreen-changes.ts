import { fromEvent, map, mapToError, merge } from '@komore/reactive';

import { elementError } from '../element.error';

/**
 * Creates an observable that emits whenever the fullscreen state of a document changes
 *
 * @returns Observable that emits whenever the fullscreen state of the document changes
 */
export function observeFullscreenChanges(): Observable<Document | undefined>;

/**
 * Creates an observable that emits whenever the fullscreen state of an element changes
 *
 * @param element Optional target element
 * @returns Observable that emits whenever the fullscreen state of the element changes
 */
export function observeFullscreenChanges<ElementType extends Element>(
  element: ElementType
): Observable<ElementType | undefined>;

export function observeFullscreenChanges<ElementType extends Element>(
  element?: ElementType
): Observable<ElementType | undefined> {
  const el = element ?? document;
  return merge([
    fromEvent(el, 'fullscreenchange').pipe(map(() => (document.fullscreenElement as ElementType | null) ?? undefined)),
    fromEvent(el, 'fullscreenerror').pipe(mapToError(() => elementError.fullscreenError({ element: el }))),
  ]);
}
