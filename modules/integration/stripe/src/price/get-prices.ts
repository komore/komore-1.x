import type { Observable } from '@komore/reactive';
import { deferPromise } from '@komore/reactive/promise';
import type Stripe from 'stripe';
import type { StripeClient } from '../stripe-client';

export function getPrices(
  stripeClient: StripeClient,
  priceListParameters: Stripe.PriceListParams
): Observable<Stripe.Response<Stripe.ApiList<Stripe.Price>>> {
  // TODO: expand()
  return deferPromise(() => stripeClient.prices.list(priceListParameters));
}
