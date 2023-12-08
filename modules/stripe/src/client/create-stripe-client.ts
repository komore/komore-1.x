import Stripe from 'stripe';

import { type StripeClient } from './stripe-client';
import { type StripeClientOptions } from './stripe-client-options';

/**
 * Creates a Stripe client
 *
 * @param options Options
 * @returns Stripe client
 */
export function createStripeClient(options: StripeClientOptions): StripeClient {
  const { apiKey, ...stripeConfig } = options;
  const apiVersion = '2023-10-16';
  return new Stripe(apiKey, {
    ...stripeConfig,
    typescript: true,
    apiVersion,
  });
}
