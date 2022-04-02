import { RepositoryWebhook, type RepositoryWebhookConfig } from '@cdktf/provider-github';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Github repository webhook resource
 *
 * @param resourceId Resource identifier
 * @param config Github repository webhook configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function githubRepositoryWebhook<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, RepositoryWebhookConfig>
) {
  return resource(resourceId, typedResource('github_repository_webhook', RepositoryWebhook), config);
}
