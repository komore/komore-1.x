import { type Observable } from '@komore/reactive';
import { type HostLifecycleEvent } from './host-lifecycle-event';
import { hostLifecycleEvents } from './host-lifecycle-events';

/**
 * Returns an observable stream of host lifecycle events
 * @returns Host lifecycle events
 */
export function fromHostLifecycleEvents(): Observable<HostLifecycleEvent> {
  return hostLifecycleEvents;
}
