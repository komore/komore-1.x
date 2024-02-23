import { type ApiGatewayApiClient } from '@komore/aws/api-gateway';

/**
 * API Gateway client options
 */
export interface ApiGatewayClientOptions {
  /**
   * API Gateway API client
   */
  readonly apiClient: ApiGatewayApiClient;
}
