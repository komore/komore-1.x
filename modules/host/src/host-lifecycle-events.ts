import { Subject } from 'rxjs';
import type { HostLifecycleEvent } from './host-lifecycle-event';

export const hostLifecycleEventsSubject = new Subject<HostLifecycleEvent>();

export const hostLifecycleEvents = hostLifecycleEventsSubject.asObservable();
