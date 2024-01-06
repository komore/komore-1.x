import { type RouterNavigationEvent } from './router-navigation-event';

/**
 * Logs a router navigation event
 * @param event Event
 */
export function toRouterEventDebugLog(event: RouterNavigationEvent): void {
  console.log('[ROUTER EVENT]', event);
}
