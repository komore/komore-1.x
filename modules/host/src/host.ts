import type { Observable } from 'rxjs';
import type { HostLifecycleEvent } from './host-lifecycle-event';
import type { HostState } from './host-state';

/**
 * Host
 */
export interface Host {
  readonly events: Observable<HostLifecycleEvent>;
  readonly state: Observable<HostState>;
}
