import { Repository, type RepositoryConfig } from '@cdktf/provider-github';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Github repository
 * @param resourceId Resource identifier
 * @param config Github repository configuration
 */
export function githubRepository<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, RepositoryConfig>
) {
  return resource(resourceId, typedResource('github_repository', Repository), config);
}
