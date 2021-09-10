import type { ElementLifecycleEventType } from './element-lifecycle-event-type';

/**
 * Element lifecycle event
 */
export interface ElementLifecycleEvent {
  readonly type: ElementLifecycleEventType;
}
