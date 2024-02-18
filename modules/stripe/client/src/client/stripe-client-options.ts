import { type StripeApiClient } from '@komore/stripe';

/**
 * Stripe client options
 */
export interface StripeClientOptions {
  /**
   * Stripe API client
   */
  readonly apiClient: StripeApiClient;
}
