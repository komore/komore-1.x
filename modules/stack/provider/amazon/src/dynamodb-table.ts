import { addResource } from '@komore/stack/provider';
import type { DynamodbTableConfig } from './.gen/dynamodb-table';
import { DynamodbTable } from './.gen/dynamodb-table';

/**
 * Adds a DynamoDB table resource
 * @param resourceId Resource identifier
 * @param config Configuration
 * @returns Operator function that adds a DynamoDB table resource
 * @template ResourceId Resource identifier
 */
export function dynamoDBTable<ResourceId extends string>(resourceId: ResourceId, config: DynamodbTableConfig) {
  return addResource(DynamodbTable, 'aws_dynamodb_table', resourceId, config);
}
