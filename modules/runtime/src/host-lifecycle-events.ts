import { Subject } from '@komore/reactive';
import { type HostLifecycleEvent } from './host-lifecycle-event';

/**
 * Host lifecycle events subject
 */
export const hostLifecycleEventsSubject = new Subject<HostLifecycleEvent>();

/**
 * Host lifecycle events observable
 */
export const hostLifecycleEvents = hostLifecycleEventsSubject.asObservable();
