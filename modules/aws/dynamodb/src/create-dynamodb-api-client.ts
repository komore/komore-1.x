import { createAwsApiClient } from '@komore/aws';

import { type DynamoDBApiClient } from './dynamodb-api-client';
import { type DynamoDBApiClientOptions } from './dynamodb-api-client-options';

/**
 * Creates a DynamoDB API client
 *
 * @param clientOptions DynamoDB API client options
 * @returns DynamoDB API client
 */
export function createDynamoDBApiClient(clientOptions: DynamoDBApiClientOptions): DynamoDBApiClient {
  const { ...awsClientOptions } = clientOptions;
  return createAwsApiClient({
    ...awsClientOptions,
    service: 'dynamodb',
  });
}
