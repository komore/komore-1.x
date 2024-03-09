import { createErrorType } from '@komore/error';

import { xRayDomain } from './x-ray.domain';

/**
 * X-Ray API error
 */
export const xRayApiError = createErrorType(xRayDomain, {});
