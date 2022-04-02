import { appsync } from '@cdktf/provider-aws';
import { addResource } from '@komore/stack/provider';

/**
 * Adds an AppSync resolver
 * @param resourceId Resource identifier
 * @param config AppSync resolver configuration
 * @returns Operator function that asdds an AppSync resolver
 * @template ResourceId Resource identifier
 */
export function appSyncResolver<ResourceId extends string>(resourceId: ResourceId, config: appsync.AppsyncResolverConfig) {
  return addResource(appsync.AppsyncResolver, 'aws_appsync_resolver', resourceId, config);
}
