import { createTestAwsApiClient } from '@komore/aws/testing';

import { type TestS3ApiClient } from './test-s3-api-client';

/**
 * Creates a test S3 API client
 *
 * @returns Test S3 API client
 */
export function createTestS3ApiClient(): TestS3ApiClient {
  return createTestAwsApiClient({});
}
