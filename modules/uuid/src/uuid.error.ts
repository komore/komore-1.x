import { createErrorGroup, errorProperties } from '@komore/error';

import { uuidDomain } from './uuid.domain';

/**
 * UUID error category
 */
export const uuidError = createErrorGroup(uuidDomain, {
  'uuid.invalid': errorProperties<{ value: unknown }>(),
});
