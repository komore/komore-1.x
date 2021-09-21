import type { RouterNavigationEvent } from './router-navigation-event';
import type { RouterNavigationEventType } from './router-navigation-event-type';
import type { RouterNavigationTrigger } from './router-navigation-trigger';

/**
 * Creates a function that returns a router navigation event with a specific trigger and event type
 * @param trigger Trigger
 * @param eventType Event type
 * @returns Function that returns a router navigation event with the specific trigger and event type
 */
export function toRouterNavigationEvent(
  trigger: RouterNavigationTrigger,
  eventType: RouterNavigationEventType
): (path: string) => RouterNavigationEvent {
  return path => ({
    eventType,
    path,
    trigger
  });
}
