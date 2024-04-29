import { createQueryType } from '@komore/query';
import { stripeDomain } from '@komore/stripe';

/**
 * Stripe query
 */
export const stripeQuery = createQueryType(stripeDomain, {});
