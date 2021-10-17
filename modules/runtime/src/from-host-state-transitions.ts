import type { Observable } from '@komore/reactive';
import { pairwise } from '@komore/reactive';
import { fromHostState } from '.';
import type { HostState } from './host-state';

/**
 * Returns an observable that emits when a host transitions from a state to another state
 * @returns Observable host state transitions
 */
export function fromHostStateTransitions(): Observable<readonly [previous: HostState, current: HostState]> {
  return fromHostState().pipe(pairwise());
}
