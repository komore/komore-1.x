import type Stripe from 'stripe';

import { type stripeLibraryClientSymbol } from './stripe-library-client-symbol';

/**
 * Stripe API client
 */
export interface StripeApiClient {
  /**
   * Stripe library client
   *
   * @private
   */
  readonly [stripeLibraryClientSymbol]: Stripe;
}
