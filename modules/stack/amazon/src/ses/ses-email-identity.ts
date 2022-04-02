import { ses } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an SES email identity resource
 *
 * @param resourceId Resource identifier
 * @param config SES email identity configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function sesEmailIdentity<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, ses.SesEmailIdentityConfig>
) {
  return resource(resourceId, typedResource('aws_ses_email_identity', ses.SesEmailIdentity), config);
}
