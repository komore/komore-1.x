import { ses } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an SES domain identity resource
 *
 * @param resourceId Resource identifier
 * @param config SES domain identity configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function sesDomainIdentityVerification<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, ses.SesDomainIdentityVerificationConfig>
) {
  return resource(resourceId, typedResource('aws_ses_domain_identity_verification', ses.SesDomainIdentityVerification), config);
}
