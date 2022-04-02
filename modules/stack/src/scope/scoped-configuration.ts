import { type GenericScope } from './generic-scope';

export type ScopedConfiguration<ScopeType extends GenericScope, ConfigType> =
  | ConfigType
  | ((scope: ScopeType) => ConfigType);
