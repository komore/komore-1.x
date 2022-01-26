import { dynamodb } from '@cdktf/provider-aws';
import { addResource } from '@komore/stack/provider';

/**
 * Adds a DynamoDB table resource
 * @param resourceId Resource identifier
 * @param config Configuration
 * @returns Operator function that adds a DynamoDB table resource
 * @template ResourceId Resource identifier
 */
export function dynamoDBTable<ResourceId extends string>(resourceId: ResourceId, config: dynamodb.DynamodbTableConfig) {
  return addResource(dynamodb.DynamodbTable, 'aws_dynamodb_table', resourceId, config);
}
