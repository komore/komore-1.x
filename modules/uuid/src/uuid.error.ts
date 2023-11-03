import { createErrorType, errorProperties } from '@komore/error';

import { uuidDomain } from './uuid.domain';

/**
 * UUID error
 */
export const uuidError = createErrorType(uuidDomain, {
  'uuid.invalid': errorProperties<{ value: unknown }>(),
});
