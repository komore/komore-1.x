import { type CommandEventRecorder } from '@komore/client';
import { type StripeApiClient } from '@komore/stripe';

import { type stripeCommand } from '../stripe.command';
import { type stripeEvent } from '../stripe.event';

/**
 * Stripe command handler options
 */
export interface StripeCommandHandlerOptions {
  /**
   * Stripe API client
   */
  readonly apiClient: StripeApiClient;
  /**
   * Stripe command-to-event recorder
   */
  readonly toEvents: CommandEventRecorder<typeof stripeCommand, typeof stripeEvent>;
}
