import { deferPromise, type Observable } from '@komore/reactive';
import type Stripe from 'stripe';
import { type StripeClient } from '../stripe-client';

/**
 * Deletes a product
 * @param stripeClient Stripe client
 * @param productId Product identifier
 * @returns Deleted product
 */
export function deleteProduct(
  stripeClient: StripeClient,
  productId: string
): Observable<Stripe.Response<Stripe.DeletedProduct>> {
  return deferPromise(() => stripeClient.products.del(productId));
}
