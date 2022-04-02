import { GithubProvider, type GithubProviderConfig } from '@cdktf/provider-github';
import { provider, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Github provider
 * @param providerId Provider identifier
 * @param config Github provider configuration
 */
export function github<ScopeType extends GenericScope, ProviderId extends string>(
  providerId: ProviderId,
  config: ScopedConfiguration<ScopeType, GithubProviderConfig>
) {
  return provider(providerId, GithubProvider, config);
}
