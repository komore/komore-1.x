import { iam } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an IAM policy resource
 *
 * @param resourceId Resource identifier
 * @param config IAM policy configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function iamPolicy<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, iam.IamPolicyConfig>
) {
  return resource(resourceId, typedResource('aws_iam_policy', iam.IamPolicy), config);
}
