import { type Expand, type ReadonlyRecord } from '@komore/typescript';
import { type GenericScope } from './generic-scope';
import { type GenericScopeVariables } from './generic-scope-variables';
import { type Scope } from './scope';
import { type ScopeDataSources } from './scope-data-sources';
import { type ScopeLocals } from './scope-locals';
import { type ScopeModules } from './scope-modules';
import { type ScopeOutputs } from './scope-outputs';
import { type ScopeProviders } from './scope-providers';
import { type ScopeResources } from './scope-resources';
import { type ScopeVariables } from './scope-variables';

/**
 * Scope with additional variables
 *
 * @template ScopeType Scope type
 * @template Variables Variable types
 */
export type ScopeWithAddedVariables<ScopeType extends GenericScope, Variables extends GenericScopeVariables> = Scope<
  ScopeVariables<ScopeType> extends ReadonlyRecord<string, never>
    ? {
        readonly [K in keyof Variables]: Variables[K];
      }
    : Expand<
        {
          readonly [K in keyof ScopeVariables<ScopeType>]: ScopeVariables<ScopeType>[K];
        } & {
          readonly [K in keyof Variables]: Variables[K];
        }
      >,
  ScopeLocals<ScopeType>,
  ScopeOutputs<ScopeType>,
  ScopeProviders<ScopeType>,
  ScopeResources<ScopeType>,
  ScopeDataSources<ScopeType>,
  ScopeModules<ScopeType>
>;
