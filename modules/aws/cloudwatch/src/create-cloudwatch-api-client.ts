import {
  awsApiClientDefaultUrlStrategy,
  awsApiClientHeaderSignatureStrategy,
  awsApiClientJsonParametersStrategy,
  awsApiClientJsonResultStrategy,
  createAwsApiClient,
} from '@komore/aws';

import { type CloudWatchApiClientOptions } from './cloudwatch-api-client-options';

/**
 * Creates a CloudWatch API client
 *
 * @param clientOptions CloudWatch API client options
 * @returns CloudWatch API client
 */
export function createCloudWatchApiClient(clientOptions: CloudWatchApiClientOptions) {
  const { ...awsClientOptions } = clientOptions;
  const service = 'cloudwatch';
  const targetPrefix = 'Monitoring'; // TODO: check in generated API files
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
