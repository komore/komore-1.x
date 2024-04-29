import type Stripe from 'stripe';

import { createEventType, eventProperties } from '@komore/event';
import { stripeDomain } from '@komore/stripe';

/**
 * Stripe event
 */
export const stripeEvent = createEventType(stripeDomain, {
  /**
   * A price has been created
   *
   * @see {@link https://stripe.com/docs/api/prices/create Create a price}
   */
  priceCreated: eventProperties<Stripe.Price>(),
});
