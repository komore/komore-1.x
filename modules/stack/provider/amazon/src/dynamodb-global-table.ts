import { addResource } from '@komore/stack/provider';
import type { DynamodbGlobalTableConfig } from './.gen/dynamodb-global-table';
import { DynamodbGlobalTable } from './.gen/dynamodb-global-table';

/**
 * Adds a DynamoDB global table resource
 * @param resourceId Resource identifier
 * @param config Configuration
 * @returns Operator function that adds a DynamoDB global table resource
 * @template ResourceId Resource identifier
 */
export function dynamoDBGlobalTable<ResourceId extends string>(
  resourceId: ResourceId,
  config: DynamodbGlobalTableConfig
) {
  return addResource(DynamodbGlobalTable, 'aws_dynamodb_global_table', resourceId, config);
}
