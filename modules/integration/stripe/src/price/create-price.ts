import { deferPromise, type Observable } from '@komore/reactive';
import type Stripe from 'stripe';
import { type StripeClient } from '../stripe-client';

export function createPrice(
  stripeClient: StripeClient,
  priceCreationParameters: Stripe.PriceCreateParams
): Observable<Stripe.Response<Stripe.Price>> {
  return deferPromise(() => stripeClient.prices.create(priceCreationParameters));
}
