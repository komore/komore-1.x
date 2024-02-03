import type Stripe from 'stripe';

import { commandProperties, createCommandType } from '@komore/command';
import { stripeDomain } from '@komore/stripe';

/**
 * Stripe command
 */
export const stripeCommand = createCommandType(stripeDomain, {
  /**
   * Creates a price
   *
   * @see {@link https://stripe.com/docs/api/prices/create Create a price}
   */
  createPrice: commandProperties<Stripe.PriceCreateParams>(),
});
