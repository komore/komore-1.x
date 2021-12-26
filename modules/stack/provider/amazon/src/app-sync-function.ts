import { addResource } from '@komore/stack/provider';
import { AppsyncFunction, type AppsyncFunctionConfig } from './.gen/appsync-function';

/**
 * Adds an AppSync function resource
 * @param resourceId Resource identifier
 * @param config AppSync configuration
 * @returns Operator function that adds an AppSync function resource
 * @template ResourceId Resource identifier
 */
export function appSyncFunction<ResourceId extends string>(resourceId: ResourceId, config: AppsyncFunctionConfig) {
  return addResource(AppsyncFunction, 'aws_appsync_resource', resourceId, config);
}
