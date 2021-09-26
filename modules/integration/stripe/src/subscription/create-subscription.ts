import type { Observable } from '@komore/reactive';
import { deferPromise } from '@komore/reactive/promise';
import type Stripe from 'stripe';
import type { StripeClient } from '../stripe-client';

/**
 * Creates a subscription
 * @param stripeClient Stripe client
 * @param subscriptionCreationParameters Subscription creation parameters
 * @returns Subscription
 */
export function createSubscription(
  stripeClient: StripeClient,
  subscriptionCreationParameters: Stripe.SubscriptionCreateParams
): Observable<unknown> {
  return deferPromise(() => stripeClient.subscriptions.create(subscriptionCreationParameters));
}
