import { type HostState } from './host-state';

/**
 * Host state transition
 */
export interface HostStateTransition {
  readonly previous: HostState;
  readonly current: HostState;
}
