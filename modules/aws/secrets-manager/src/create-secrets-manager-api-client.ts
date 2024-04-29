import {
  awsApiClientDefaultUrlStrategy,
  awsApiClientHeaderSignatureStrategy,
  awsApiClientJsonParametersStrategy,
  awsApiClientJsonResultStrategy,
  createAwsApiClient,
} from '@komore/aws';

import { type SecretsManagerApiClient } from './secrets-manager-api-client';
import { type SecretsManagerApiClientOptions } from './secrets-manager-api-client-options';

/**
 * Creates a Secrets Manager API client
 *
 * @param clientOptions Secrets Manager API client options
 * @returns Secrets Manager API client
 */
export function createSecretsManagerApiClient(clientOptions: SecretsManagerApiClientOptions): SecretsManagerApiClient {
  const { ...awsClientOptions } = clientOptions;
  const service = 'secretsmanager';
  const targetPrefix = 'secretsmanager';
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
