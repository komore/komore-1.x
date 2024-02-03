import { defer, fromEvent, map, startWith } from '@komore/reactive';

/**
 * Returns an observable that emits a slot's nodes
 *
 * @param htmlSlotElement HTML slot element
 * @param options Options
 * @returns Observable that emits the slot's nodes then emits them again whenever they change
 */
export function observeSlotNodes(
  htmlSlotElement: HTMLSlotElement,
  options?: AssignedNodesOptions
): Observable<ReadonlyArray<Node>> {
  return defer(() =>
    fromEvent(htmlSlotElement, 'slotchange').pipe(
      map(() => htmlSlotElement.assignedNodes(options)),
      startWith(htmlSlotElement.assignedNodes(options))
      // TODO: check if startWith/defer is relevant
    )
  );
}
