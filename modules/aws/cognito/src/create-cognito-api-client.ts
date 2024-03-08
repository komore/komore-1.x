import { createAwsApiClient } from '@komore/aws';

import { type CognitoApiClient } from './cognito-api-client';
import { type CognitoApiClientOptions } from './cognito-api-client-options';

/**
 * Creates a Cognito API client
 *
 * @param clientOptions Cognito API client options
 * @returns Cognito API client
 */
export function createCognitoClient(clientOptions: CognitoApiClientOptions): CognitoApiClient {
  const { ...awsClientOptions } = clientOptions;
  return createAwsApiClient({ ...awsClientOptions, service: 'cognito' });
}
