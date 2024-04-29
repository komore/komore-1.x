import { matchQuery } from '@komore/query';

import { type StripeQueryHandler } from './stripe-query-handler';
import { type StripeQueryHandlerOptions } from './stripe-query-handler-options';

/**
 * Creates a Stripe query handler
 *
 * @param handlerOptions Stripe query handler options
 * @returns
 */
export function createStripeQueryHandler(handlerOptions: StripeQueryHandlerOptions): StripeQueryHandler {
  const { apiClient } = handlerOptions;
  apiClient;
  return query => matchQuery(query, {});
}
