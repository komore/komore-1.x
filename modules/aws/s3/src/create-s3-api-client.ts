import { createAwsApiClient } from '@komore/aws';

import { type S3ApiClient } from './s3-api-client';
import { type S3ApiClientOptions } from './s3-api-client-options';

/**
 * Creates an S3 API client
 *
 * @param clientOptions S3 API client options
 * @returns S3 API client
 */
export function createS3ApiClient(clientOptions: S3ApiClientOptions): S3ApiClient {
  const { ...awsClientOptions } = clientOptions;
  return createAwsApiClient(awsClientOptions);
}
