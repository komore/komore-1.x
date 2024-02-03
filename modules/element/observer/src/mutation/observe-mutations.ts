import { throwError } from '@komore/reactive';

import { elementObserverError } from '../element-observer.error';

/**
 * Observes a node's mutations
 *
 * @param target Target node
 * @param options Mutation observer options
 * @returns Observable stream of node mutation records
 */
export function observeMutations(
  target: Node,
  options?: MutationObserverInit
): Observable<ReadonlyArray<MutationRecord>> {
  if (globalThis.MutationObserver === undefined) {
    return throwError(() => elementObserverError.mutationObserverNotSupported());
  }

  return new Observable<ReadonlyArray<MutationRecord>>(subscriber => {
    const mutationObserver = new MutationObserver(entries => subscriber.next(entries));
    mutationObserver.observe(target, options);
    subscriber.add(() => mutationObserver.disconnect());
  });
}
