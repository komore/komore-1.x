import { createErrorType } from '@komore/error';

import { xRayDomain } from './x-ray.domain';

/**
 * X-Ray type error
 */
export const xRayTypeError = createErrorType(xRayDomain, {});
