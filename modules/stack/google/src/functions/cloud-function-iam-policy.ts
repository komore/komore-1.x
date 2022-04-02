import { CloudfunctionsFunctionIamPolicy, type CloudfunctionsFunctionIamPolicyConfig } from '@cdktf/provider-google';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Cloud Function IAM policy resource
 *
 * @param resourceId Resource identifier
 * @param config Cloud Function IAM policy configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function cloudFunctionIamPolicy<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, CloudfunctionsFunctionIamPolicyConfig>
) {
  return resource(
    resourceId,
    typedResource('google_cloudfunctions_function_iam_policy', CloudfunctionsFunctionIamPolicy),
    config
  );
}
