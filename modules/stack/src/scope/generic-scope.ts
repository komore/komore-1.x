import { type GenericScopeDataSources } from './generic-scope-data-sources';
import { type GenericScopeLocals } from './generic-scope-locals';
import { type GenericScopeModules } from './generic-scope-modules';
import { type GenericScopeOutputs } from './generic-scope-outputs';
import { type GenericScopeProviders } from './generic-scope-providers';
import { type GenericScopeResources } from './generic-scope-resources';
import { type GenericScopeVariables } from './generic-scope-variables';
import { type Scope } from './scope';

/**
 * Generic scope
 */
export type GenericScope = Scope<
  GenericScopeVariables,
  GenericScopeLocals,
  GenericScopeOutputs,
  GenericScopeProviders,
  GenericScopeResources,
  GenericScopeDataSources,
  GenericScopeModules
>;
