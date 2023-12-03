import { ses } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an SES configuration set resource
 *
 * @param resourceId Resource identifier
 * @param config SES configuration set configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function sesConfigurationSet<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, ses.SesConfigurationSetConfig>
) {
  return resource(resourceId, typedResource('aws_ses_configuration_set', ses.SesConfigurationSet), config);
}
