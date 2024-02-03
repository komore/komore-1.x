import { createErrorType } from '@komore/error';

import { stripeDomain } from './stripe.domain';

/**
 * Stripe API error
 */
export const stripeApiError = createErrorType(stripeDomain, {});
