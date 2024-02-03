import type Stripe from 'stripe';

import { deferPromise } from '@komore/reactive';

import { type StripeClient } from '../stripe-client';

export function updatePrice(
  stripeClient: StripeClient,
  priceId: string,
  priceUpdateParameters: Stripe.PriceUpdateParams
): Observable<Stripe.Response<Stripe.Price>> {
  return deferPromise(() => stripeClient.prices.update(priceId, priceUpdateParameters));
}
