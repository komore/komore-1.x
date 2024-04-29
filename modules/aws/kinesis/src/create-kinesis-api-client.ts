import {
  awsApiClientDefaultUrlStrategy,
  awsApiClientHeaderSignatureStrategy,
  awsApiClientJsonParametersStrategy,
  awsApiClientJsonResultStrategy,
  createAwsApiClient,
} from '@komore/aws';

import { type KinesisApiClient } from './kinesis-api-client';
import { type KinesisApiClientOptions } from './kinesis-api-client-options';

/**
 * Creates a Kinesis API client
 *
 * @param clientOptions Kinesis API client options
 * @returns Kinesis API client
 */
export function createKinesisApiClient(clientOptions: KinesisApiClientOptions): KinesisApiClient {
  const { ...awsClientOptions } = clientOptions;
  const service = 'kinesis';
  const targetPrefix = 'Kinesis_20131202';
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
