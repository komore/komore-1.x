import { createEventType, eventProperties } from '@komore/event';

import { browserRouterDomain } from './browser-router.domain';
import { type BrowserRouterNavigation } from './event/browser-router-navigation';

/**
 * Browser router event
 */
export const browserRouterEvent = createEventType(browserRouterDomain, {
  navigationCancelled: eventProperties<BrowserRouterNavigation>(),
  navigationEnded: eventProperties<BrowserRouterNavigation>(),
  navigationStarted: eventProperties<BrowserRouterNavigation>(),
});
