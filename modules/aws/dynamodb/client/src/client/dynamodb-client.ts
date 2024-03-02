import { type AwsClient } from '@komore/aws';

import { type dynamoDBCommand } from '../dynamodb.command';
import { type dynamoDBError } from '../dynamodb.error';
import { type dynamoDBEvent } from '../dynamodb.event';
import { type dynamoDBQuery } from '../dynamodb.query';
import { type dynamoDBCommandEventMapping } from './dynamodb-command-event-mapping';

/**
 * DynamoDB client
 */
export type DynamoDBClient = AwsClient<
  typeof dynamoDBCommand,
  typeof dynamoDBCommandEventMapping,
  typeof dynamoDBEvent,
  typeof dynamoDBQuery,
  typeof dynamoDBError
>;
