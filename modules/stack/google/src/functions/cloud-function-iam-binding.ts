import { CloudfunctionsFunctionIamBinding, type CloudfunctionsFunctionIamBindingConfig } from '@cdktf/provider-google';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Cloud Function IAM binding resource
 *
 * @param resourceId Resource identifier
 * @param config Cloud Function IAM binding configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function cloudFunctionIamBinding<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, CloudfunctionsFunctionIamBindingConfig>
) {
  return resource(
    resourceId,
    typedResource('google_cloudfunctions_function_iam_binding', CloudfunctionsFunctionIamBinding),
    config
  );
}
