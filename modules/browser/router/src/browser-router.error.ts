import { createErrorType, errorProperties } from '@komore/error';

import { browserRouterDomain } from './browser-router.domain';

/**
 * Browser router error
 */
export const browserRouterError = createErrorType(browserRouterDomain, {
  /**
   * The Navigation API is not supported
   */
  unsupportedNavigationApi: errorProperties(),
});
