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
  type ScopeVariables,
} from './scope';

/**
 * Scope with an additional output
 * @template ScopeType Scope type
 * @template OutputId Output identifier
 * @template OutputType Output type
 */
export type ScopeWithAddedOutput<
  ScopeType extends GenericScope,
  OutputId extends string,
  OutputType extends StackType
> = Scope<
  ScopeVariables<ScopeType>,
  ScopeLocals<ScopeType>,
  {
    readonly [K in keyof ScopeOutputs<ScopeType>]: ScopeOutputs<ScopeType>[K];
  } & ReadonlyRecord<OutputId, TypedVariable<OutputType>>,
  ScopeProviders<ScopeType>,
  ScopeResources<ScopeType>,
  ScopeDataSources<ScopeType>,
  ScopeModules<ScopeType>
>;
