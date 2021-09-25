import type { Observable } from '@komore/reactive';
import { deferPromise } from '@komore/reactive/promise';
import type { StripeClient } from "../stripe-client";

export function createSubscription(stripeClient: StripeClient): Observable<unknown> {
  return deferPromise(() => stripeClient.subscriptions.create());
}