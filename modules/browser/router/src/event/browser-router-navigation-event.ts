import { type BrowserRouterNavigationEventType } from './browser-router-navigation-event-type';
import { type RouterNavigationTrigger } from './router-navigation-trigger';

/**
 * Browser router navigation event
 */
export interface BrowserRouterNavigationEvent {
  readonly eventType: BrowserRouterNavigationEventType;
  readonly path: string;
  readonly trigger: RouterNavigationTrigger;
}
