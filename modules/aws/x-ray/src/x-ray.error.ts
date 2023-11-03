import { createErrorType } from '@komore/error';

import { xRayDomain } from './x-ray.domain';

/**
 * X-Ray error
 */
export const xRayError = createErrorType(xRayDomain, {});
