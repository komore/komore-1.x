import { StorageBucket, type StorageBucketConfig } from '@cdktf/provider-google';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Cloud Storage bucket resource
 *
 * @param resourceId Resource identifier
 * @param config Cloud Storage bucket configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function cloudStorageBucket<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, StorageBucketConfig>
) {
  return resource(resourceId, typedResource('google_storage_bucket', StorageBucket), config);
}
