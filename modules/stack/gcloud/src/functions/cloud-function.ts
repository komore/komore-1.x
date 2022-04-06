import { CloudfunctionsFunction, type CloudfunctionsFunctionConfig } from '@cdktf/provider-google';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Cloud Function resource
 *
 * @param resourceId Resource identifier
 * @param config Cloud Function configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function cloudFunction<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, CloudfunctionsFunctionConfig>
) {
  return resource(resourceId, typedResource('google_cloudfunctions_function', CloudfunctionsFunction), config);
}
