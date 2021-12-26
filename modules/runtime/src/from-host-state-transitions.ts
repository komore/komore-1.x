import { map, pairwise, type Observable } from '@komore/reactive';
import { fromHostState } from './from-host-state';
import { type HostStateTransition } from './host-state-transition';

/**
 * Returns an observable that emits when a host transitions from a state to another state
 * @returns Observable host state transitions
 */
export function fromHostStateTransitions(): Observable<HostStateTransition> {
  return fromHostState().pipe(
    pairwise(),
    map(([previous, current]) => ({
      previous,
      current
    }))
  );
}
