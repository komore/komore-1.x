import type { Observable } from '@komore/reactive';
import { filter } from '@komore/reactive';
import type { HostState } from './host-state';
import { fromHostState } from './from-host-state';

/**
 * subscription to the source observable until the host reaches a specific state
 * @param expectedHostState Expected host state
 */
export function hostHas(expectedHostState: HostState): Observable<HostState> {
  return observeHostState().pipe(
    filter(state => state === expectedHostState)
  );
}
