import type { Observable } from 'rxjs';
import type { HostState } from './host-state';
import { hostState } from './host-state';

/**
 * Observes the host state
 * @returns Observable host state
 */
export function observeHostState(): Observable<HostState> {
  return hostState;
}
