import { matchCommand } from '@komore/command';
import { type EventFromType } from '@komore/event';
import { deferPromise, map, redactValue, tapNext, type Observable } from '@komore/reactive';

import { stripeEvent } from '../stripe.event';
import { type StripeCommandHandler } from './stripe-command-handler';
import { type StripeCommandHandlerOptions } from './stripe-command-handler-options';

export function createStripeCommandHandler(options: StripeCommandHandlerOptions): StripeCommandHandler {
  type ResultType = Observable<EventFromType<typeof stripeEvent>>;
  return command =>
    matchCommand<typeof command, ResultType>(command, {
      createPrice: priceCreateParams =>
        deferPromise(() => options.stripe.prices.create(priceCreateParams)).pipe(map(stripeEvent.priceCreated)),
    }).pipe(
      tapNext(event => {
        console.log('todo', event);
      }),
      redactValue()
    );
}
