import { appsync } from '@cdktf/provider-aws';
import { addResource } from '@komore/stack/provider';

/**
 * Adds an AppSync GraphQL API
 * @param resourceId Resource identifier
 * @param config AppSync GraphQL API configuration
 * @returns Operator function that adds an AppSync GraphQL API
 * @template ResourceId Resource identifier
 */
export function appSyncGraphQLAPI<ResourceId extends string>(resourceId: ResourceId, config: appsync.AppsyncGraphqlApiConfig) {
  return addResource(appsync.AppsyncGraphqlApi, 'aws_appsync_graphql_api', resourceId, config);
}
