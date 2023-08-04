import { createErrorCategory, errorProperties } from '@komore/error';

import { uuidDomain } from './uuid.domain';

/**
 * UUID error category
 */
export const uuidError = createErrorCategory(uuidDomain, 'default', {
  'uuid.invalid': ['value "${value}" is not a valid UUID', errorProperties<{ value: unknown }>()],
});
