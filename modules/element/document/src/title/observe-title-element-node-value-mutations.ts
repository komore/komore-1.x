import { observeMutations } from '@komore/element/observer';
import { distinctUntilChanged, map, shareReplay } from '@komore/reactive';

/**
 * Observes a title element's node value mutations
 *
 * @param titleElement HTML title element
 * @returns Observable stream of title element node values
 * @private
 */
export function observeTitleElementNodeValueMutations(titleElement: HTMLTitleElement): Observable<string> {
  return observeMutations(titleElement, { characterData: true }).pipe(
    map(mutations => mutations[0]?.target.nodeValue ?? ''),
    distinctUntilChanged(),
    shareReplay({ bufferSize: 1, refCount: true })
  );
}
