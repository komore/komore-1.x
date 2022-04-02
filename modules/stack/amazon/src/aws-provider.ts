import { AwsProvider, type AwsProviderConfig } from '@cdktf/provider-aws';
import { provider, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an AWS provider
 *
 * @param providerId Provider identifier
 * @param config AWS provider configuration
 * @template ScopeType Scope type
 * @template ProviderId Provider identifier
 */
export function awsProvider<ScopeType extends GenericScope, ProviderId extends string>(
  providerId: ProviderId,
  config: ScopedConfiguration<ScopeType, AwsProviderConfig>
) {
  return provider(providerId, AwsProvider, config);
}
