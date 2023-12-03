import { dynamodb } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a DynamodDB table resource
 *
 * @param resourceId Resource identifier
 * @param config DynamoDB table configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function dynamoDbTable<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, dynamodb.DynamodbTableConfig>
) {
  return resource(resourceId, typedResource('aws_dynamodb_table', dynamodb.DynamodbTable), config);
}
