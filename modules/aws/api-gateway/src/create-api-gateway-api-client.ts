import { createAwsApiClient } from '@komore/aws';

import { type ApiGatewayApiClient } from './api-gateway-api-client';
import { type ApiGatewayApiClientOptions } from './api-gateway-api-client-options';

/**
 * Creates an API Gateway API client
 *
 * @param clientOptions API Gateway API client options
 * @returns API gateway API client
 */
export function createApiGatewayApiClient(clientOptions: ApiGatewayApiClientOptions): ApiGatewayApiClient {
  const { ...awsClientOptions } = clientOptions;
  return createAwsApiClient(awsClientOptions);
}
