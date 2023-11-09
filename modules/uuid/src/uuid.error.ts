import { createErrorType, errorProperties } from '@komore/error';

import { uuidDomain } from './uuid.domain';

/**
 * UUID error
 */
export const uuidError = createErrorType(uuidDomain, {
  invalidUuid: errorProperties<{ value: unknown }>(),
});
