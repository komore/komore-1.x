import { createTestAwsApiClient } from '@komore/aws/testing';

import { type TestSqsApiClient } from './test-sqs-api-client';
import { type TestSqsApiClientOptions } from './test-sqs-api-client-options';

/**
 * Creates a test SQS API client
 *
 * @param clientOptions Test SQS API client options
 * @returns Test SQS API client
 */
export function createTestSqsApiClient(clientOptions: TestSqsApiClientOptions): TestSqsApiClient {
  const { ...awsClientOptions } = clientOptions;
  return createTestAwsApiClient({ ...awsClientOptions });
}
