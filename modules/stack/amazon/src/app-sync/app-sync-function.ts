import { appsync } from '@cdktf/provider-aws';
import { addResource } from '@komore/stack/provider';

/**
 * Adds an AppSync function resource
 * @param resourceId Resource identifier
 * @param config AppSync configuration
 * @returns Operator function that adds an AppSync function resource
 * @template ResourceId Resource identifier
 */
export function appSyncFunction<ResourceId extends string>(resourceId: ResourceId, config: appsync.AppsyncFunctionConfig) {
  return addResource(appsync.AppsyncFunction, 'aws_appsync_resource', resourceId, config);
}
