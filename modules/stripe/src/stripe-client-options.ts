import type Stripe from 'stripe';

/**
 * Stripe configuration
 * @deprecated Remove once StripeConfig is properly publicly exported
 */
type StripeConfig = ConstructorParameters<typeof Stripe>[1];

/**
 * Stripe client options
 */
export interface StripeClientOptions extends Omit<StripeConfig, 'typescript' | 'apiVersion'> {
  readonly apiKey: string;
}
