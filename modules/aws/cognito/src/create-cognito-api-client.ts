import {
  awsApiClientDefaultUrlStrategy,
  awsApiClientHeaderSignatureStrategy,
  awsApiClientJsonParametersStrategy,
  awsApiClientJsonResultStrategy,
  createAwsApiClient,
} from '@komore/aws';

import { type CognitoApiClient } from './cognito-api-client';
import { type CognitoApiClientOptions } from './cognito-api-client-options';

/**
 * Creates a Cognito API client
 *
 * @param clientOptions Cognito API client options
 * @returns Cognito API client
 */
export function createCognitoApiClient(clientOptions: CognitoApiClientOptions): CognitoApiClient {
  const { ...awsClientOptions } = clientOptions;
  const service = 'cognito';
  const targetPrefix = 'AWSCognitoIdentityProviderService';
  return createAwsApiClient({
    ...awsClientOptions,
    service,
    strategies: {
      parameters: awsApiClientJsonParametersStrategy({ targetPrefix }),
      result: [awsApiClientJsonResultStrategy({})],
      signature: awsApiClientHeaderSignatureStrategy({}),
      url: awsApiClientDefaultUrlStrategy(),
    },
  });
}
