import { createErrorType } from '@komore/error';

import { stripeDomain } from './stripe.domain';

/**
 * Stripe error
 */
export const stripeError = createErrorType(stripeDomain, {});
