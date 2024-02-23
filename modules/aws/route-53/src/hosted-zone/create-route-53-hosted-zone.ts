import { type Route53ApiClient } from '../route-53-api-client';

/**
 * Creates a function that creates a Route 53 hosted zone
 *
 * @param apiClient Route 53 API client
 * @returns Function that creates a Route 53 hosted zone
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html CreateHostedZone}
 */
export function createRoute53HostedZone(
  apiClient: Route53ApiClient
): (parameters: CreateRoute53HostedZoneParameters) => Observable<CreateRoute53HostedZoneResult> {}
