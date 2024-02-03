import type Stripe from 'stripe';

/**
 * Stripe client options
 */
export interface StripeApiClientOptions extends Omit<Stripe.StripeConfig, 'typescript' | 'apiVersion'> {
  readonly apiKey: string;
}
