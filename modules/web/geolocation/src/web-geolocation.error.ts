import { createErrorType, errorProperties } from '@komore/error';

import { webGeolocationDomain } from './web-geolocation.domain';

/**
 * Web geolocation error
 */
export const webGeolocationError = createErrorType(webGeolocationDomain, {
  /**
   * Web geolocation not supported
   */
  notSupported: errorProperties(),
  /**
   * Web geolocation requires a secure context
   */
  secureContextRequired: errorProperties(),
});
