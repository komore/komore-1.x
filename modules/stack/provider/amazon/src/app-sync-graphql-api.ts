import { addResource } from '@komore/stack/provider';
import { AppsyncGraphqlApi, type AppsyncGraphqlApiConfig } from './.gen/appsync-graphql-api';

/**
 * Adds an AppSync GraphQL API
 * @param resourceId Resource identifier
 * @param config AppSync GraphQL API configuration
 * @returns Operator function that adds an AppSync GraphQL API
 * @template ResourceId Resource identifier
 */
export function appSyncGraphQLAPI<ResourceId extends string>(resourceId: ResourceId, config: AppsyncGraphqlApiConfig) {
  return addResource(AppsyncGraphqlApi, 'aws_appsync_graphql_api', resourceId, config);
}
