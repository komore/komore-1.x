import { createErrorType } from '@komore/error';

import { route53Domain } from './route-53.domain';

/**
 * Route 53 error
 */
export const route53Error = createErrorType(route53Domain, {});
