import { type GenericScope } from './generic-scope';

/**
 * Scoped configuration
 *
 * @template ScopeType Scope type
 * @template ConfigType Configuration type
 */
export type ScopedConfiguration<ScopeType extends GenericScope, ConfigType> =
  | ConfigType
  | ((scope: ScopeType) => ConfigType);
