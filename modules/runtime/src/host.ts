import { type Observable } from '@komore/reactive';

import { type HostError } from './host-error';
import { type HostLifecycleEvent } from './host-lifecycle-event';
import { type HostState } from './host-state';

/**
 * Host
 */
export interface Host {
  /**
   * Errors
   */
  readonly errors: Observable<HostError>;
  /**
   * Lifecycle events
   */
  readonly lifecycle: Observable<HostLifecycleEvent>;
  /**
   * State
   */
  readonly state: Observable<HostState>;
}
