import { createErrorType } from '@komore/error';

import { route53Domain } from './route-53.domain';

/**
 * Route 53 type error
 */
export const route53TypeError = createErrorType(route53Domain, {});
