import { type Route53ApiClient } from '../route-53-api-client';

import { type ListRoute53HostedZonesParameters } from './list-route-53-hosted-zones-parameters';
import { type ListRoute53HostedZonesResult } from './list-route-53-hosted-zones-result';

/**
 * Creates a function that lists Route 53 hosted zones
 *
 * @param apiClient Route 53 API client
 * @returns Function that lists Route 53 hosted zones
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZones.html ListHostedZones}
 */
export function listRoute53HostedZones(
  apiClient: Route53ApiClient
): (parameters: ListRoute53HostedZonesParameters) => Observable<ListRoute53HostedZonesResult> {
  const method = 'GET';
  const operation = 'ListHostedZones';
  const resourcePath = 'hostedzone';
  return ({}) => apiClient({ method, operation, resourcePath });
}
