import { addResource } from '@komore/stack/provider';
import type { AppsyncResolverConfig } from './.gen/appsync-resolver';
import { AppsyncResolver } from './.gen/appsync-resolver';

/**
 * Adds an AppSync resolver
 * @param resourceId Resource identifier
 * @param config AppSync resolver configuration
 * @returns Operator function that asdds an AppSync resolver
 * @template ResourceId Resource identifier
 */
export function appSyncResolver<ResourceId extends string>(resourceId: ResourceId, config: AppsyncResolverConfig) {
  return addResource(AppsyncResolver, 'aws_appsync_resolver', resourceId, config);
}
