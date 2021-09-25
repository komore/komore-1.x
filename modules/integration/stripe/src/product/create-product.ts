import type { Observable } from '@komore/reactive';
import { deferPromise } from '@komore/reactive/promise';
import type Stripe from 'stripe';
import type { StripeClient } from '../stripe-client';

/**
 * Creates a product
 * @param stripeClient Stripe client
 * @param productCreationParameters Product creation parameters
 * @returns Product
 */
export function createProduct(
  stripeClient: StripeClient,
  productCreationParameters: Stripe.ProductCreateParams
): Observable<Stripe.Response<Stripe.Product>> {
  return deferPromise(() => stripeClient.products.create(productCreationParameters));
}
