import { dynamodb } from '@cdktf/provider-aws';
import { addResource } from '@komore/stack/provider';

/**
 * Adds a DynamoDB global table resource
 * @param resourceId Resource identifier
 * @param config Configuration
 * @returns Operator function that adds a DynamoDB global table resource
 * @template ResourceId Resource identifier
 */
export function dynamoDBGlobalTable<ResourceId extends string>(
  resourceId: ResourceId,
  config: dynamodb.DynamodbGlobalTableConfig
) {
  return addResource(dynamodb.DynamodbGlobalTable, 'aws_dynamodb_global_table', resourceId, config);
}
