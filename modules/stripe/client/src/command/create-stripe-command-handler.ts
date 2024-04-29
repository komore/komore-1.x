import { matchCommand } from '@komore/command';
import { type EventFromType } from '@komore/event';
import { deferPromise, map, redactValue, tapNext } from '@komore/reactive';

import { stripeEvent } from '../stripe.event';
import { type StripeCommandHandler } from './stripe-command-handler';
import { type StripeCommandHandlerOptions } from './stripe-command-handler-options';

/**
 * Creates a Stripe command handler
 *
 * @param handlerOptions Command handler options
 * @returns Stripe command handler
 */
export function createStripeCommandHandler(handlerOptions: StripeCommandHandlerOptions): StripeCommandHandler {
  const { apiClient } = handlerOptions;
  apiClient;
  type ResultType = Observable<EventFromType<typeof stripeEvent>>;
  return command =>
    matchCommand<typeof command, ResultType>(command, {
      createPrice: priceCreateParams =>
        deferPromise(() => handlerOptions.stripe.prices.create(priceCreateParams)).pipe(map(stripeEvent.priceCreated)),
    }).pipe(
      tapNext(event => {
        console.log('todo', event);
      }),
      redactValue()
    );
}
