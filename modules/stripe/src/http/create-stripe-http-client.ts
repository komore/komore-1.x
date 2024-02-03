import type Stripe from 'stripe';

import { type HttpClient } from '@komore/http/client';
import { mergeMap, timeout } from '@komore/reactive';

/**
 * Creates a Stripe HTTP client, given an HTTP client
 *
 * @param httpClient HTTP client
 * @returns Stripe HTTP client
 * @private
 */
export function createStripeHttpClient(httpClient: HttpClient): Stripe.HttpClient {
  return {
    getClientName: () => '@komore/stripe',
    makeRequest: (host, port, path, method, stripeHeaders, requestData, protocol, timeoutMs) => {
      const url = new URL(`${protocol}://${host}:${port}${path}`);
      const headers = Object.entries(stripeHeaders);
      return httpClient({ headers, method, url }).pipe(
        mergeMap(httpClientResponseToStripeHttpClientResponse()),
        timeout({ first: Temporal.Duration.from({ milliseconds: timeoutMs }) })
      );
    },
  };
}
