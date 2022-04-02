import { PubsubTopic, type PubsubTopicConfig } from '@cdktf/provider-google';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Cloud Pub/Sub topic resource
 *
 * @param resourceId Resource identifier
 * @param config Cloud Pub/Sub topic configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function cloudPubSubTopic<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, PubsubTopicConfig>
) {
  return resource(resourceId, typedResource('google_cloud_pubsub_topic', PubsubTopic), config);
}
