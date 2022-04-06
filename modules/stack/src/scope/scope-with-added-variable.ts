import { type Expand, type ReadonlyRecord } from '@komore/typescript';
import { type StackType } from '../type/stack-type';
import { type GenericScope } from './generic-scope';
import { type Scope } from './scope';
import { type ScopeDataSources } from './scope-data-sources';
import { type ScopeLocals } from './scope-locals';
import { type ScopeModules } from './scope-modules';
import { type ScopeOutputs } from './scope-outputs';
import { type ScopeProviders } from './scope-providers';
import { type ScopeResources } from './scope-resources';
import { type ScopeVariables } from './scope-variables';

/**
 * Scope with an additional variable
 *
 * @template ScopeType Scope type
 * @template VariableId Variable identifier
 * @template VariableType Variable type
 */
export type ScopeWithAddedVariable<
  ScopeType extends GenericScope,
  VariableId extends string,
  VariableType extends StackType
> = Scope<
  ScopeVariables<ScopeType> extends ReadonlyRecord<string, never>
    ? {
        readonly [K in VariableId]: VariableType;
      }
    : Expand<
        {
          readonly [K in keyof ScopeVariables<ScopeType>]: ScopeVariables<ScopeType>[K];
        } & {
          readonly [K in VariableId]: VariableType;
        }
      >,
  ScopeLocals<ScopeType>,
  ScopeOutputs<ScopeType>,
  ScopeProviders<ScopeType>,
  ScopeResources<ScopeType>,
  ScopeDataSources<ScopeType>,
  ScopeModules<ScopeType>
>;
