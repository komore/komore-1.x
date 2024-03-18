import { createClient } from '@komore/client';

import { createDynamoDBCommandHandler } from '../command/create-dynamodb-command-handler';
import { dynamoDBCommand } from '../dynamodb.command';
import { dynamoDBError } from '../dynamodb.error';
import { dynamoDBEvent } from '../dynamodb.event';
import { dynamoDBQuery } from '../dynamodb.query';
import { type DynamoDBClient } from './dynamodb-client';
import { dynamoDBClientCommandEventMap } from './dynamodb-client-command-event-map';
import { type DynamoDBClientOptions } from './dynamodb-client-options';

/**
 * Creates a DynamoDB client
 *
 * @param clientOptions DynamoDB client options
 * @returns DynamoDB client
 */
export function createDynamoDBClient(clientOptions: DynamoDBClientOptions): DynamoDBClient {
  const { apiClient } = clientOptions;
  return createClient({
    command: dynamoDBCommand,
    commandEventMap: dynamoDBClientCommandEventMap,
    commandHandler: ({ toEvents }) => createDynamoDBCommandHandler({ apiClient, toEvents }),
    error: dynamoDBError,
    event: dynamoDBEvent,
    query: dynamoDBQuery,
    queryHandler: () => createDynamoDBQueryHandler({ apiClient }),
  });
}
