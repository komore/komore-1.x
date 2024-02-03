import type Stripe from 'stripe';

import { deferPromise } from '@komore/reactive';

import { type StripeClient } from '../stripe-client';

export function getPrice(
  stripeClient: StripeClient,
  priceId: string,
  priceRetrievalParameters: Stripe.PriceRetrieveParams
): Observable<Stripe.Response<Stripe.Price>> {
  return deferPromise(() => stripeClient.prices.retrieve(priceId, priceRetrievalParameters));
}
