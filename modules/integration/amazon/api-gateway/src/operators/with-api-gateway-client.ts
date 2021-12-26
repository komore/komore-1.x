import { type APIGatewayClient } from '@aws-sdk/client-api-gateway';
import { withAwsClient } from '@komore/integration-amazon';
import { createApiGatewayClient } from '../create-api-gateway-client';

/**
 * Adds an API gatewy client to a message
 * @param apiGatewayClient API gateway client
 * @returns Unary function that turns a message into a message with an API gateway client
 */
export const withApiGatewayClient = (apiGatewayClient?: APIGatewayClient) =>
  withAwsClient('api-gateway', apiGatewayClient ?? createApiGatewayClient());
