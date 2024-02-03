import { createErrorType } from '@komore/error';

import { stripeDomain } from './stripe.domain';

/**
 * Stripe type error
 */
export const stripeTypeError = createErrorType(stripeDomain, {});
