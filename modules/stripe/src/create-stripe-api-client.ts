import Stripe from 'stripe';

import { type StripeApiClient } from './stripe-api-client';
import { type StripeApiClientOptions } from './stripe-api-client-options';
import { stripeLibraryClientSymbol } from './stripe-library-client-symbol';

/**
 * Creates a Stripe client
 *
 * @param options Options
 * @returns Stripe client
 */
export function createStripeApiClient(options: StripeApiClientOptions): StripeApiClient {
  const { apiKey, ...stripeConfig } = options;
  const apiVersion = '2023-10-16';
  const stripe = new Stripe(apiKey, {
    ...stripeConfig,
    typescript: true,
    apiVersion,
  });
  return {
    [stripeLibraryClientSymbol]: stripe,
  };
}
