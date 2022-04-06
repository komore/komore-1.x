import { type GenericScope } from './generic-scope';
import { type GenericScopeDataSources } from './generic-scope-data-sources';
import { type GenericScopeLocals } from './generic-scope-locals';
import { type GenericScopeModules } from './generic-scope-modules';
import { type GenericScopeOutputs } from './generic-scope-outputs';
import { type GenericScopeResources } from './generic-scope-resources';
import { type GenericScopeVariables } from './generic-scope-variables';
import { type Scope } from './scope';

/**
 * Scope providers
 *
 * @template ScopeType Scope type
 */
export type ScopeProviders<ScopeType extends GenericScope> = ScopeType extends Scope<
  GenericScopeVariables,
  GenericScopeLocals,
  GenericScopeOutputs,
  infer Providers,
  GenericScopeResources,
  GenericScopeDataSources,
  GenericScopeModules
>
  ? Providers
  : never;
