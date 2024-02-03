import { type ErrorFromType } from '@komore/error';

import { type HostLifecycleEvent } from './lifecycle/host-lifecycle-event';
import { runtimeHostError } from './runtime-host.error';
import { type HostState } from './state/host-state';
import { type HostStateTransition } from './state/host-state-transition';

/**
 * Host
 */
export interface Host {
  /**
   * Errors
   */
  readonly error: Observable<ErrorFromType<typeof runtimeHostError>>;
  /**
   * Lifecycle events
   */
  readonly lifecycle: Observable<HostLifecycleEvent>;
  /**
   * State
   */
  readonly state: Observable<HostState>;
  /**
   * State transitions
   */
  readonly stateTransitions: Observable<HostStateTransition>;
}
