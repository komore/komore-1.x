import { createTestAwsApiClient } from '@komore/aws/testing';

import { type TestSqsApiClient } from './test-sqs-api-client';

/**
 * Creates a test SQS API client
 *
 * @returns Test SQS API client
 */
export function createTestSqsApiClient(): TestSqsApiClient {
  return createTestAwsApiClient();
}
