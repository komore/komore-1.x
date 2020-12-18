import { TableDescription } from '@aws-sdk/client-dynamodb';
import { DynamoDBTableMetadata } from './dynamodb-table-metadata';

/**
 * DynamoDB table
 */
export type DynamoDBTable = Readonly<{
  description: Readonly<TableDescription>;
  metadata: DynamoDBTableMetadata;
}>;
