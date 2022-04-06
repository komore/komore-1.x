import { type GenericScope } from './generic-scope';
import { type GenericScopeLocals } from './generic-scope-locals';
import { type GenericScopeModules } from './generic-scope-modules';
import { type GenericScopeOutputs } from './generic-scope-outputs';
import { type GenericScopeProviders } from './generic-scope-providers';
import { type GenericScopeResources } from './generic-scope-resources';
import { type GenericScopeVariables } from './generic-scope-variables';
import { type Scope } from './scope';

/**
 * Scope data sources
 * @template ScopeType Scope type
 */
export type ScopeDataSources<ScopeType extends GenericScope> = ScopeType extends Scope<
  GenericScopeVariables,
  GenericScopeLocals,
  GenericScopeOutputs,
  GenericScopeProviders,
  GenericScopeResources,
  infer DataSources,
  GenericScopeModules
>
  ? DataSources
  : never;
