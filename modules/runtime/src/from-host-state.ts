import { type Observable } from '@komore/reactive';
import { type HostState } from './host-state';
import { hostStateSubject } from './host-state-subject';

/**
 * Host state observable
 */
const HOST_STATE = hostStateSubject.asObservable();

/**
 * Observes the host state
 * @returns Observable host state
 */
export function fromHostState(): Observable<HostState> {
  return HOST_STATE;
}
