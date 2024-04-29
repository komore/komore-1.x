import {
  awsApiClientDefaultUrlStrategy,
  awsApiClientHeaderSignatureStrategy,
  awsApiClientJsonParametersStrategy,
  awsApiClientJsonResultStrategy,
  createAwsApiClient,
} from '@komore/aws';

import { type SqsApiClient } from './sqs-api-client';
import { type SqsApiClientOptions } from './sqs-api-client-options';

/**
 * Creates an SQS API client
 *
 * @param clientOptions SQS API client options
 * @returns SQS API client
 */
export function createSqsApiClient(clientOptions: SqsApiClientOptions): SqsApiClient {
  const { ...awsClientOptions } = clientOptions;
  const service = 'sqs';
  const targetPrefix = 'AmazonSQS';
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
