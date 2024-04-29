import { createClientCommandEventMap } from '@komore/client';

import { type stripeCommand } from '../stripe.command';
import { type stripeEvent } from '../stripe.event';

/**
 * Stripe client command-to-event map
 */
export const stripeClientCommandEventMap = createClientCommandEventMap<typeof stripeCommand, typeof stripeEvent>()({
  createPrice: 'priceCreated',
});
