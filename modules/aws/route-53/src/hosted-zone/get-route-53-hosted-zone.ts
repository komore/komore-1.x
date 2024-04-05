import { map } from '@komore/reactive';

import { type Route53ApiClient } from '../route-53-api-client';
import { type GetRoute53HostedZoneParameters } from './get-route-53-hosted-zone-parameters';
import { getRoute53HostedZoneResultXml, type GetRoute53HostedZoneResult } from './get-route-53-hosted-zone-result';

/**
 * Creates a function that returns a Route 53 hosted zone
 *
 * @param apiClient Route 53 API client
 * @returns Function that returns a Route 53 hosted zone
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZone.html GetHostedZone}
 */
export function getRoute53HostedZone(
  apiClient: Route53ApiClient
): (parameters: GetRoute53HostedZoneParameters) => Observable<GetRoute53HostedZoneResult> {
  type XmlResult = { readonly [rootTag]: Parameters<typeof getRoute53HostedZoneResultXml>[0] };
  const method = 'GET';
  const operation = 'GetHostedZone';
  const rootTag = 'GetHostedZoneResponse';
  return ({ Id }) =>
    apiClient<XmlResult>({ method, operation, resourcePath: `hostedzone/${Id}` }).pipe(
      map(response => response[rootTag]),
      map(getRoute53HostedZoneResultXml)
    );
}
