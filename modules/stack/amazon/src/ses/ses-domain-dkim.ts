import { ses } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an SES domain DKIM resource
 *
 * @param resourceId Resource identifier
 * @param config SES domain DKIM configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function sesDomainDkim<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, ses.SesDomainDkimConfig>
) {
  return resource(resourceId, typedResource('aws_ses_domain_dkim', ses.SesDomainDkim), config);
}
