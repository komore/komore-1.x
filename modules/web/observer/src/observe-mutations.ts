import { Observable, throwError } from 'rxjs';

/**
 * Observes node mutations
 * @param target Target node
 * @param options Mutation observer options
 * @returns Observable stream of node mutation records
 */
export function observeMutations(target: Node, options?: MutationObserverInit): Observable<MutationRecord> {
  if (globalThis.MutationObserver === undefined) {
    return throwError(() => new Error('MutationObserver not supported'));
  }

  return new Observable<MutationRecord>(observer => {
    const mutationObserver = new MutationObserver(entries => entries.forEach(entry => observer.next(entry)));
    mutationObserver.observe(target, options);
    return () => mutationObserver.disconnect();
  });
}
