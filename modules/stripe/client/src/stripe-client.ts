import { type Client } from '@komore/client';

import { type stripeCommand } from './stripe.command';
import { type stripeError } from './stripe.error';
import { type stripeEvent } from './stripe.event';
import { type stripeQuery } from './stripe.query';
import { type stripeClientCommandEventMap } from './stripe-client-command-event-map';

/**
 * Stripe client
 */
export type StripeClient = Client<
  typeof stripeCommand,
  typeof stripeEvent,
  typeof stripeQuery,
  typeof stripeError,
  typeof stripeClientCommandEventMap
>;
