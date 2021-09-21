import type { RouterNavigationEventType } from './router-navigation-event-type';
import type { RouterNavigationTrigger } from './router-navigation-trigger';

/**
 * Router navigation event
 */
export interface RouterNavigationEvent {
  readonly eventType: RouterNavigationEventType;
  readonly path: string;
  readonly trigger: RouterNavigationTrigger;
}
