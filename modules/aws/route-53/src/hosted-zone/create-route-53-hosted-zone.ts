import { type Route53ApiClient } from '../route-53-api-client';

import { type CreateRoute53HostedZoneParameters } from './create-route-53-hosted-zone-parameters';
import { type CreateRoute53HostedZoneResult } from './create-route-53-hosted-zone-result';

/**
 * Creates a function that creates a Route 53 hosted zone
 *
 * @param apiClient Route 53 API client
 * @returns Function that creates a Route 53 hosted zone
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html CreateHostedZone}
 */
export function createRoute53HostedZone(
  apiClient: Route53ApiClient
): (parameters: CreateRoute53HostedZoneParameters) => Observable<CreateRoute53HostedZoneResult> {
  const operation = 'CreateHostedZone';
  const resourcePath = 'hostedzone';
  return parameters => apiClient({ operation, parameters, resourcePath });
}
