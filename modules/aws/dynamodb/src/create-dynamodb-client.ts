import { DynamoDBClient as AwsDynamoDBClient } from '@aws-sdk/client-dynamodb';

import { of } from '@komore/reactive';

import { type DynamoDBClient } from './dynamodb-client';
import { type DynamoDBClientOptions } from './dynamodb-client-options';

/**
 * Creates a DynamoDB client
 *
 * @param configuration Configuration
 * @returns DynamoDB client
 */
export function createDynamoDBClient(options: DynamoDBClientOptions): DynamoDBClient {
  const { logger: _ } = options;
  const client = new AwsDynamoDBClient({});
  client;
  return command => {
    console.log('hm', command);
    return of(void 0);
  };
}
