import { createQueryType } from '@komore/query';

import { stripeDomain } from './stripe.domain';

/**
 * Stripe query
 */
export const stripeQuery = createQueryType(stripeDomain, {});
