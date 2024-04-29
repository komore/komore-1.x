import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type stripeQuery } from '../stripe.query';

/**
 * Stripe query handler
 */
export type StripeQueryHandler = QueryHandler<QueryFromType<typeof stripeQuery>>;
