import { deferPromise, type Observable } from '@komore/reactive';
import type Stripe from 'stripe';
import { type StripeClient } from '../stripe-client';

export function getPrice(
  stripeClient: StripeClient,
  priceId: string,
  priceRetrievalParameters: Stripe.PriceRetrieveParams
): Observable<Stripe.Response<Stripe.Price>> {
  return deferPromise(() => stripeClient.prices.retrieve(priceId, priceRetrievalParameters));
}
