import { route53Domain } from '@komore/aws/route-53';
import { createErrorType } from '@komore/error';

/**
 * Route 53 error
 */
export const route53Error = createErrorType(route53Domain, {});
