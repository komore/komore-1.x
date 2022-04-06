import { GoogleProvider, type GoogleProviderConfig } from '@cdktf/provider-google';
import { provider, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Google Cloud provider
 * @param providerId Provider identifier
 * @param config Google Cloud provider configuration
 * @template ScopeType Scope type
 * @template ProviderId Provider identifier
 */
export function gcloudProvider<ScopeType extends GenericScope, ProviderId extends string>(
  providerId: ProviderId,
  config: ScopedConfiguration<ScopeType, GoogleProviderConfig>
) {
  return provider(providerId, GoogleProvider, config);
}
