import { CloudfunctionsFunctionIamMember, type CloudfunctionsFunctionIamMemberConfig } from '@cdktf/provider-google';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Cloud Function IAM member resource
 *
 * @param resourceId Resource identifier
 * @param config Cloud Function IAM member configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function cloudFunctionIamMember<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, CloudfunctionsFunctionIamMemberConfig>
) {
  return resource(
    resourceId,
    typedResource('google_cloudfunctions_function_iam_member', CloudfunctionsFunctionIamMember),
    config
  );
}
