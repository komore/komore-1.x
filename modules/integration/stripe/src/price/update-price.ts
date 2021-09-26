import type { Observable } from '@komore/reactive';
import { deferPromise } from '@komore/reactive/promise';
import type Stripe from 'stripe';
import type { StripeClient } from '../stripe-client';

export function updatePrice(
  stripeClient: StripeClient,
  priceId: string,
  priceUpdateParameters: Stripe.PriceUpdateParams
): Observable<Stripe.Response<Stripe.Price>> {
  return deferPromise(() => stripeClient.prices.update(priceId, priceUpdateParameters));
}
