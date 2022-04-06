import { type GenericScope } from './generic-scope';
import { type GenericScopeDataSources } from './generic-scope-data-sources';
import { type GenericScopeLocals } from './generic-scope-locals';
import { type GenericScopeModules } from './generic-scope-modules';
import { type GenericScopeProviders } from './generic-scope-providers';
import { type GenericScopeResources } from './generic-scope-resources';
import { type GenericScopeVariables } from './generic-scope-variables';
import { type Scope } from './scope';

/**
 * Scope outputs
 *
 * @template ScopeType Scope type
 */
export type ScopeOutputs<ScopeType extends GenericScope> = ScopeType extends Scope<
  GenericScopeVariables,
  GenericScopeLocals,
  infer Outputs,
  GenericScopeProviders,
  GenericScopeResources,
  GenericScopeDataSources,
  GenericScopeModules
>
  ? Outputs
  : never;
