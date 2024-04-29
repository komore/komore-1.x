import {
  awsApiClientDefaultUrlStrategy,
  awsApiClientHeaderSignatureStrategy,
  awsApiClientJsonParametersStrategy,
  awsApiClientJsonResultStrategy,
  createAwsApiClient,
} from '@komore/aws';

import { type TranscribeApiClient } from './transcribe-api-client';
import { type TranscribeApiClientOptions } from './transcribe-api-client-options';

/**
 * Creates a Transcribe API client
 *
 * @param clientOptions Transcribe API client options
 * @returns Transcribe API client
 */
export function createTranscribeApiClient(clientOptions: TranscribeApiClientOptions): TranscribeApiClient {
  const { ...awsClientOptions } = clientOptions;
  const service = 'transcribe';
  const targetPrefix = 'Transcribe';
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
