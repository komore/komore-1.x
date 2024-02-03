import type Stripe from 'stripe';

import { deferPromise, type Observable } from '@komore/reactive';

import { type StripeApiClient } from '../stripe-api-client';
import { stripeLibraryClientSymbol } from '../stripe-library-client-symbol';

/**
 * Creates a Stripe subscription
 *
 * @param apiClient Stripe API client
 * @param subscriptionCreationParameters Subscription creation parameters
 * @returns Subscription
 */
export function createStripeSubscription(
  apiClient: StripeApiClient
): (subscriptionCreationParameters: Stripe.SubscriptionCreateParams) => Observable<Stripe.Subscription> {
  const subscriptions = apiClient[stripeLibraryClientSymbol].subscriptions;
  return parameters => deferPromise(() => subscriptions.create(parameters));
}
