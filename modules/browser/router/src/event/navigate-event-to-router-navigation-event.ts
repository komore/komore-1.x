import { type RouterNavigationEvent } from './router-navigation-event';
import { type RouterNavigationEventType } from './router-navigation-event-type';
import { type RouterNavigationTrigger } from './router-navigation-trigger';

/**
 * Creates a function that returns a router navigation event, given a navigate event
 *
 * @param trigger Trigger
 * @param eventType Event type
 * @returns Function that returns a router navigation event, given a navigate event
 */
export function navigateEventToRouterNavigationEvent(
  trigger: RouterNavigationTrigger,
  eventType: RouterNavigationEventType
): (navigateEvent: NavigateEvent) => RouterNavigationEvent {
  return navigateEvent => ({
    eventType,
    path: navigateEvent.destination.url,
    trigger,
  });
}
