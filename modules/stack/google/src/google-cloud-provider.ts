import { GoogleProvider, type GoogleProviderConfig } from '@cdktf/provider-google';
import { provider, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Google Cloud provider
 * @param providerId Provider identifier
 * @param config Google Cloud provider configuration
 */
export function googleCloudProvider<ScopeType extends GenericScope, ProviderId extends string>(
  providerId: ProviderId,
  config: ScopedConfiguration<ScopeType, GoogleProviderConfig>
) {
  return provider(providerId, GoogleProvider, config);
}
