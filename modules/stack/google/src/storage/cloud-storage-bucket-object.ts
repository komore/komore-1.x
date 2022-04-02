import { StorageBucketObject, type StorageBucketObjectConfig } from '@cdktf/provider-google';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Cloud Storage bucket object resource
 *
 * @param resourceId Resource identifier
 * @param config Cloud Storage bucket object configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function cloudStorageBucketObject<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, StorageBucketObjectConfig>
) {
  return resource(resourceId, typedResource('google_storage_bucket_object', StorageBucketObject), config);
}
