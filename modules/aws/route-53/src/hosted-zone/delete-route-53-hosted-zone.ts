import { type Route53ApiClient } from '../route-53-api-client';

import { type DeleteRoute53HostedZoneParameters } from './delete-route-53-hosted-zone-parameters';
import { type DeleteRoute53HostedZoneResult } from './delete-route-53-hosted-zone-result';

/**
 * Deletes a function that deletes a Route 53 hosted zone
 *
 * @param apiClient Route 53 API client
 * @returns Function that deletes a Route 53 hosted zone
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHostedZone.html DeleteHostedZone}
 */
export function deleteRoute53HostedZone(
  apiClient: Route53ApiClient
): (parameters: DeleteRoute53HostedZoneParameters) => Observable<DeleteRoute53HostedZoneResult> {
  const method = 'DELETE';
  const operation = 'DeleteHostedZone';
  return ({ Id }) => apiClient({ method, operation, resourcePath: `hostedzone/${Id}` });
}
