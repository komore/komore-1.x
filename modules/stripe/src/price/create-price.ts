import type Stripe from 'stripe';

import { deferPromise } from '@komore/reactive';

import { type StripeClient } from '../client/stripe-client';

export function createPrice(
  stripeClient: StripeClient,
  priceCreationParameters: Stripe.PriceCreateParams
): Observable<Stripe.Response<Stripe.Price>> {
  return deferPromise(() => stripeClient.prices.create(priceCreationParameters));
}
