import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type stripeCommand } from '../stripe.command';

/**
 * Stripe command handler
 */
export type StripeCommandHandler = CommandHandler<CommandFromType<typeof stripeCommand>>;
