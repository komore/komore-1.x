import { type StripeApiClient } from '@komore/stripe';

/**
 * Stripe query handler options
 */
export interface StripeQueryHandlerOptions {
  /**
   * Stripe API client
   */
  readonly apiClient: StripeApiClient;
}
