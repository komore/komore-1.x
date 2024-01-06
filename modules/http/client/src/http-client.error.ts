import { createErrorType, errorProperties } from '@komore/error';

import { httpClientDomain } from './http-client.domain';

/**
 * HTTP client error
 */
export const httpClientError = createErrorType(httpClientDomain, {
  /**
   * Error response
   */
  errorResponse: errorProperties<Response>(),
  /**
   * Network failed
   */
  networkFailed: errorProperties(),
});
