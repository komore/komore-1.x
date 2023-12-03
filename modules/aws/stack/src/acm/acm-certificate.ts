import { acm } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an ACM certificate resource
 *
 * @param resourceId Resource identifier
 * @param config ACM certificate configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function acmCertificate<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, acm.AcmCertificateConfig>
) {
  return resource(resourceId, typedResource('aws_acm_certificate', acm.AcmCertificate), config);
}
