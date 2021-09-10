import { observeMutations } from '@komore/element/observer';
import type { Observable } from '@komore/reactive';
import { fromEvent } from '@komore/reactive';
import { distinctUntilChanged, filter, map, shareReplay, switchMap } from '@komore/reactive/operators';

// TODO: move to @komore/web/observer?

/**
 * Observes the document title
 * @returns Observable stream of document titles
 */
export function observeDocumentTitle(): Observable<string> {
  return fromEvent(document, 'DOMContentLoaded').pipe(
    map(() => document.head.querySelector('> title')),
    filter((element): element is HTMLTitleElement => element !== null),
    switchMap(observeTitleElementNodeValueMutations)
  );
}

/**
 * Observes a title element's node value mutations
 * @param titleElement HTML title element
 * @returns Observable stream of title element node values
 */
function observeTitleElementNodeValueMutations(titleElement: HTMLTitleElement): Observable<string> {
  return observeMutations(titleElement, { characterData: true }).pipe(
    map(mutations => mutations[0].target.nodeValue ?? ''),
    distinctUntilChanged(),
    shareReplay({ bufferSize: 1, refCount: true })
  );
}
