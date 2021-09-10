import type { Observable } from '@komore/reactive';
import { defer, fromEvent } from '@komore/reactive';
import { map, startWith } from '@komore/reactive/operators';

/**
 * Returns an observable that emits a slot's elements
 * @param htmlSlotElement HTML slot element
 * @param options Options
 * @returns Observable that emits the slot's elements then emits them again whenever they change
 */
export function observeSlotElements(
  htmlSlotElement: HTMLSlotElement,
  options?: AssignedNodesOptions
): Observable<ReadonlyArray<Element>> {
  return defer(() =>
    fromEvent(htmlSlotElement, 'slotchange').pipe(
      map(() => htmlSlotElement.assignedElements(options)),
      startWith(htmlSlotElement.assignedElements(options))
      // TODO: check if startWith/defer is relevant
    )
  );
}
