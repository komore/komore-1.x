import type Stripe from 'stripe';

/**
 * Stripe command handler options
 */
export interface StripeCommandHandlerOptions {
  /**
   * Stripe client
   */
  readonly stripe: Stripe;
}
