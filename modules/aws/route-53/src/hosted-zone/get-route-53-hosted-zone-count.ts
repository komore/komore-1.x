import { map } from '@komore/reactive';

import { type Route53ApiClient } from '../route-53-api-client';
import { type GetRoute53HostedZoneCountResult } from './get-route-53-hosted-zone-count-result';

/**
 * Creates a function that returns the Route 53 hosted zone count
 *
 * @param apiClient Route 53 API client
 * @returns Function that returns the Route 53 hosted zone count
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneCount.html GetHostedZoneCount}
 */
export function getRoute53HostedZoneCount(
  apiClient: Route53ApiClient
): () => Observable<GetRoute53HostedZoneCountResult> {
  const method = 'GET';
  const operation = 'GetHostedZone';
  const resourcePath = 'hostedzonecount';
  const rootTag = 'GetHostedZoneCountResponse';
  return () =>
    apiClient<{ readonly [rootTag]: GetRoute53HostedZoneCountResult }>({
      method,
      operation,
      resourcePath,
    }).pipe(map(response => response[rootTag])); // TODO: have the strategy handle the root element
}
