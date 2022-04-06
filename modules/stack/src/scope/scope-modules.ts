import { type GenericScope } from './generic-scope';
import { type GenericScopeDataSources } from './generic-scope-data-sources';
import { type GenericScopeLocals } from './generic-scope-locals';
import { type GenericScopeOutputs } from './generic-scope-outputs';
import { type GenericScopeProviders } from './generic-scope-providers';
import { type GenericScopeResources } from './generic-scope-resources';
import { type GenericScopeVariables } from './generic-scope-variables';
import { type Scope } from './scope';

/**
 * Scope modules
 *
 * @template ScopeType Scope type
 */
export type ScopeModules<ScopeType extends GenericScope> = ScopeType extends Scope<
  GenericScopeVariables,
  GenericScopeLocals,
  GenericScopeOutputs,
  GenericScopeProviders,
  GenericScopeResources,
  GenericScopeDataSources,
  infer Modules
>
  ? Modules
  : never;
