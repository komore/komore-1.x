import { appsync } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an AppSync GraphQL API resource
 *
 * @param resourceId Resource identifier
 * @param config AppSync GraphQL API configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function appSyncGraphQLApi<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, appsync.AppsyncGraphqlApiConfig>
) {
  return resource(resourceId, typedResource('aws_appsync_graphql_api', appsync.AppsyncGraphqlApi), config);
}
