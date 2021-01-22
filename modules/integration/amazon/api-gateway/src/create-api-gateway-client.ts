import type { APIGatewayClientConfig } from '@aws-sdk/client-api-gateway';
import { APIGatewayClient } from '@aws-sdk/client-api-gateway';

/**
 * Creates an API gateway client
 * @param configuration Configuration
 * @returns API gateway client
 */
export function createApiGatewayClient(configuration?: APIGatewayClientConfig): APIGatewayClient {
  return new APIGatewayClient(configuration ?? {});
}
