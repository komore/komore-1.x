import { map, type OperatorFunction } from '@komore/reactive';
import { type TerraformProvider } from 'cdktf';
import { type Construct } from 'constructs';
import { type GenericScope } from '../scope/generic-scope';
import { type ScopedConfiguration } from '../scope/scoped-configuration';
import { type ScopeWithAddedProvider } from '../scope/scope-with-added-provider';
import { resolveScopedConfiguration } from './resolve-scoped-configuration';

/**
 * Adds a provider
 * @param providerId Provider identifier
 * @param constructor Provider class
 * @param config Provider configuration
 * @template ScopeType Scope type
 * @template ProviderId Provider identifier
 * @template ProviderType Provider type
 * @template ConfigType Provider configuration type
 */
export function provider<
  ScopeType extends GenericScope,
  ProviderId extends string,
  ProviderType extends TerraformProvider,
  ConfigType
>(
  providerId: ProviderId,
  constructor: new (construct: Construct, id: string, config: ConfigType) => ProviderType,
  config: ScopedConfiguration<ScopeType, ConfigType>
): OperatorFunction<ScopeType, ScopeWithAddedProvider<ScopeType, ProviderId, ProviderType>> {
  return map(scope => {
    const providerConfig = resolveScopedConfiguration(scope, config);
    const provider = new constructor(scope.construct, providerId, providerConfig);
    return {
      ...scope,
      providers: {
        ...scope.providers,
        [providerId]: provider,
      },
    } as ScopeWithAddedProvider<ScopeType, ProviderId, ProviderType>;
  });
}
