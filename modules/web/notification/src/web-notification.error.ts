import { createErrorType, errorProperties } from '@komore/error';

import { webNotificationDomain } from './web-notification.domain';

/**
 * Web notification error
 */
export const webNotificationError = createErrorType(webNotificationDomain, {
  /**
   * Web notifications are not supported
   */
  notSupported: errorProperties(),
});
