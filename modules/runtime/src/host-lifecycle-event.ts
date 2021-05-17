import type { HostLifecycleEventType } from "./host-lifecycle-event-type";

/**
 * Host lifecycle event
 */
export interface HostLifecycleEvent {
  readonly type: HostLifecycleEventType;
}
