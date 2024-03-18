import { createAwsApiClient } from '@komore/aws';

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
  return createAwsApiClient({ ...awsClientOptions, service: 'transcribe' });
}
