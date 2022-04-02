import { type ReadonlyRecord } from '@komore/typescript';
import { type StackType } from '../type/stack-type';
import { type TypedVariable } from '../type/typed-variable';
import { type GenericScope } from './generic-scope';
import {
  type Scope,
  type ScopeDataSources,
  type ScopeLocals,
  type ScopeModules,
  type ScopeOutputs,
  type ScopeProviders,
  type ScopeResources,
  type ScopeVariables
} from './scope';

/**
 * Scope with additional variables
 * @template ScopeType Scope type
 * @template VariableId Variable identifier
 * @template VariableType Variable type
 */
export type ScopeWithAddedVariables<
  ScopeType extends GenericScope,
  VariableId extends string,
  VariableType extends StackType
> = Scope<
  {
    readonly [K in keyof ScopeVariables<ScopeType>]: ScopeVariables<ScopeType>[K];
  } & ReadonlyRecord<VariableId, TypedVariable<VariableType>>,
  ScopeLocals<ScopeType>,
  ScopeOutputs<ScopeType>,
  ScopeProviders<ScopeType>,
  ScopeResources<ScopeType>,
  ScopeDataSources<ScopeType>,
  ScopeModules<ScopeType>
>;
