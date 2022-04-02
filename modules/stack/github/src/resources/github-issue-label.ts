import { IssueLabel, type IssueLabelConfig } from '@cdktf/provider-github';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Github issue label resource
 * @param resourceId Resource identifier
 * @param config Github issue label configuration
 */
export function githubIssueLabel<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, IssueLabelConfig>
) {
  return resource(resourceId, typedResource('github_issue_label', IssueLabel), config);
}
