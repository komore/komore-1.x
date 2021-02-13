import type { Observable } from 'rxjs';
import type { HostLifecycleEvent } from './host-lifecycle-event';
import { hostLifecycleEvents } from './host-lifecycle-events';

/**
 * Observes the host's lifecycle events
 * @returns Host lifecycle events
 */
export function observeHostLifecycleEvents(): Observable<HostLifecycleEvent> {
  return hostLifecycleEvents;
}
