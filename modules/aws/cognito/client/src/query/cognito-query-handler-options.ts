import { type CognitoApiClient } from '@komore/aws/cognito';

/**
 * Cognito query handler options
 */
export interface CognitoQueryHandlerOptions {
  /**
   * Cognito API client
   */
  readonly apiClient: CognitoApiClient;
}
