import { dynamodb } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a DynamodDB global table resource
 *
 * @param resourceId Resource identifier
 * @param config DynamoDB global table configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function dynamoDbGlobalTable<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, dynamodb.DynamodbGlobalTableConfig>
) {
  return resource(resourceId, typedResource('aws_dynamodb_dynamodb_table', dynamodb.DynamodbGlobalTable), config);
}
