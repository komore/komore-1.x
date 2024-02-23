import { createErrorType } from '@komore/error';

import { route53Domain } from './route-53.domain';

/**
 * Route 53 API error
 */
export const route53ApiError = createErrorType(route53Domain, {});
