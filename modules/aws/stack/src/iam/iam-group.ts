import { iam } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an IAM group resource
 *
 * @param resourceId Resource identifier
 * @param config IAM group configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function iamGroup<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, iam.IamGroupConfig>
) {
  return resource(resourceId, typedResource('aws_iam_group', iam.IamGroup), config);
}
