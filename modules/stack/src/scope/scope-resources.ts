import { type GenericScope } from './generic-scope';
import { type GenericScopeDataSources } from './generic-scope-data-sources';
import { type GenericScopeLocals } from './generic-scope-locals';
import { type GenericScopeModules } from './generic-scope-modules';
import { type GenericScopeOutputs } from './generic-scope-outputs';
import { type GenericScopeProviders } from './generic-scope-providers';
import { type GenericScopeVariables } from './generic-scope-variables';
import { type Scope } from './scope';

/**
 * Scope resources
 *
 * @template ScopeType Scope type
 */
export type ScopeResources<ScopeType extends GenericScope> = ScopeType extends Scope<
  GenericScopeVariables,
  GenericScopeLocals,
  GenericScopeOutputs,
  GenericScopeProviders,
  infer Resources,
  GenericScopeDataSources,
  GenericScopeModules
>
  ? Resources
  : never;
