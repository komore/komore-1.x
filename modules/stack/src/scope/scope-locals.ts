import { type GenericScope } from './generic-scope';
import { type GenericScopeDataSources } from './generic-scope-data-sources';
import { type GenericScopeModules } from './generic-scope-modules';
import { type GenericScopeOutputs } from './generic-scope-outputs';
import { type GenericScopeProviders } from './generic-scope-providers';
import { type GenericScopeResources } from './generic-scope-resources';
import { type GenericScopeVariables } from './generic-scope-variables';
import { type Scope } from './scope';

/**
 * Scope locals
 *
 * @template ScopeType Scope type
 */
 export type ScopeLocals<ScopeType extends GenericScope> = ScopeType extends Scope<
 GenericScopeVariables,
 infer Locals,
 GenericScopeOutputs,
 GenericScopeProviders,
 GenericScopeResources,
 GenericScopeDataSources,
 GenericScopeModules
>
 ? Locals
 : never;
