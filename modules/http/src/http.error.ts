import { createErrorType, errorProperties } from '@komore/error';

import { httpDomain } from './http.domain';

/**
 * HTTP error
 */
export const httpError = createErrorType(httpDomain, {
  invalidHttpHeaderName: errorProperties<{ httpHeaderName: string }>(),
  invalidHttpMethod: errorProperties<{ httpMethod: string }>(),
  invalidHttpStatus: errorProperties<{ httpStatus: number }>(),
});
