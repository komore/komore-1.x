import { type GenericScope } from './generic-scope';
import { type GenericScopeDataSources } from './generic-scope-data-sources';
import { type GenericScopeLocals } from './generic-scope-locals';
import { type GenericScopeModules } from './generic-scope-modules';
import { type GenericScopeOutputs } from './generic-scope-outputs';
import { type GenericScopeProviders } from './generic-scope-providers';
import { type GenericScopeResources } from './generic-scope-resources';
import { type Scope } from './scope';

/**
 * Scope variables
 *
 * @template ScopeType Scope type
 */
export type ScopeVariables<ScopeType extends GenericScope> = ScopeType extends Scope<
  infer Variables,
  GenericScopeLocals,
  GenericScopeOutputs,
  GenericScopeProviders,
  GenericScopeResources,
  GenericScopeDataSources,
  GenericScopeModules
>
  ? Variables
  : never;
