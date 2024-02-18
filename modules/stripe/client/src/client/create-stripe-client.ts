import { createClient } from '@komore/client';

import { createStripeCommandHandler } from '../command/create-stripe-command-handler';
import { stripeCommand } from '../stripe.command';
import { stripeError } from '../stripe.error';
import { stripeEvent } from '../stripe.event';
import { stripeQuery } from '../stripe.query';
import { type StripeClient } from './stripe-client';
import { type StripeClientOptions } from './stripe-client-options';

/**
 * Creates a Stripe client
 *
 * @param clientOptions Stripe client options
 * @returns Stripe client
 */
export function createStripeClient(clientOptions: StripeClientOptions): StripeClient {
  const { apiClient } = clientOptions;
  return createClient({
    command: stripeCommand,
    commandHandler: toEvents => createStripeCommandHandler({ apiClient, toEvents }),
    commandEventMap: stripeClientCommandEventMap,
    error: stripeError,
    event: stripeEvent,
    query: stripeQuery,
    queryHandler: () => createStripeQueryHandler({ apiClient }),
  });
}
