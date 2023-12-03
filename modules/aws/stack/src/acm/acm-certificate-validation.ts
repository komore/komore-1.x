import { acm } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an ACM certificate validation resource
 *
 * @param resourceId Resource identifier
 * @param config ACM certificate validation configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function acmCertificateValidation<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, acm.AcmCertificateValidationConfig>
) {
  return resource(resourceId, typedResource('aws_acm_certificate_validation', acm.AcmCertificateValidation), config);
}
