import { isNotNull } from '@komore/functional';
import { filter, fromEvent, map, switchMap, type Observable } from '@komore/reactive';

import { observeTitleElementNodeValueMutations } from './observe-title-element-node-value-mutations';

/**
 * Observes the document title
 *
 * @returns Observable stream of document titles
 */
export function observeDocumentTitle(): Observable<string> {
  return fromEvent(document, 'DOMContentLoaded').pipe(
    map(() => document.head.querySelector<HTMLTitleElement>('> title')),
    filter(isNotNull),
    switchMap(observeTitleElementNodeValueMutations)
  );
}
