import type { Observable } from '@komore/reactive';
import type { HostError } from './host-error';
import type { HostLifecycleEvent } from './host-lifecycle-event';
import type { HostState } from './host-state';

/**
 * Host
 */
export interface Host {
  readonly errors: Observable<HostError>;
  readonly lifecycle: Observable<HostLifecycleEvent>;
  readonly state: Observable<HostState>;
}
