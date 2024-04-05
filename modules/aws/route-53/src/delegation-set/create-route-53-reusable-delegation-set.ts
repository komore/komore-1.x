import { type Route53ApiClient } from '../route-53-api-client';
import { type CreateRoute53ReusableDelegationSetParameters } from './create-route-53-reusable-delegation-set-parameters';
import { type CreateRoute53ReusableDelegationSetResult } from './create-route-53-reusable-delegation-set-result';

/**
 * Creates a function that creates a Route 53 reusable delegation set
 *
 * @param apiClient Route 53 API client
 * @returns Function that creates a Route 53 reusable delegation set
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html CreateReusableDelegationSet}
 */
export function createRoute53ReusableDelegationSet(
  apiClient: Route53ApiClient
): (parameters: CreateRoute53ReusableDelegationSetParameters) => Observable<CreateRoute53ReusableDelegationSetResult> {
  const operation = 'CreateReusableDelegationSet';
  const resourcePath = 'delegationset';
  const mapResponseHeaders = { location: 'Location' };
  return parameters => apiClient({ mapResponseHeaders, operation, parameters, resourcePath });
}
