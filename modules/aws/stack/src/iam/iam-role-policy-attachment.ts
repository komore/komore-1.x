import { iam } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an IAM role policy attachment resource
 *
 * @param resourceId Resource identifier
 * @param config IAM role policy attachment configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function iamRolePolicyAttachment<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, iam.IamRolePolicyAttachmentConfig>
) {
  return resource(resourceId, typedResource('aws_iam_role_policy_attachment', iam.IamRolePolicyAttachment), config);
}
