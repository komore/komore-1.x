import { createErrorType } from '@komore/error';
import { stripeDomain } from '@komore/stripe';

/**
 * Stripe error
 */
export const stripeError = createErrorType(stripeDomain, {});
