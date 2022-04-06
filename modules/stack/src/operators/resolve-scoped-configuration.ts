import { type GenericScope } from '../scope/generic-scope';
import { type ScopedConfiguration } from '../scope/scoped-configuration';

/**
 * Resolves a scoped stack configuration
 *
 * @param scope Scope
 * @param config Configuration
 * @returns Resolved configuration
 * @template ScopeType Scope type
 * @template ConfigType Configuration type
 */
export function resolveScopedConfiguration<ScopeType extends GenericScope, ConfigType>(
  scope: ScopeType,
  config: ScopedConfiguration<ScopeType, ConfigType>
): ConfigType {
  return typeof config !== 'function' ? config : (config as (scope: ScopeType) => ConfigType)(scope);
}
