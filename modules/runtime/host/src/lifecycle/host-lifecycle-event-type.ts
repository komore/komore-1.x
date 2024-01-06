import { type hostLifecycleEventTypes } from './host-lifecycle-event-types';

/**
 * Host lifecycle event type
 */
export type HostLifecycleEventType = (typeof hostLifecycleEventTypes)[number];
