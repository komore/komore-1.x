import { createAwsApiClient } from '@komore/aws';

import { type Route53ApiClient } from './route-53-api-client';
import { type Route53ApiClientOptions } from './route-53-api-client-options';

/**
 * Creates a Route 53 API client
 *
 * @param clientOptions Route 53 API client options
 * @returns Route 53 API client
 */
export function createRoute53ApiClient(clientOptions: Route53ApiClientOptions): Route53ApiClient {
  const { ...awsClientOptions } = clientOptions;
  return createAwsApiClient(awsClientOptions);
}
