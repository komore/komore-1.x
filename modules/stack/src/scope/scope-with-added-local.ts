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
 * Scope with an additional local
 * @template ScopeType Scope type
 * @template LocalId Local identifier
 * @template LocalType Local type
 */
export type ScopeWithAddedLocal<
  ScopeType extends GenericScope,
  LocalId extends string,
  LocalType extends StackType
> = Scope<
  ScopeVariables<ScopeType>,
  {
    readonly [K in keyof ScopeLocals<ScopeType>]: ScopeLocals<ScopeType>[K];
  } & ReadonlyRecord<LocalId, TypedVariable<LocalType>>,
  ScopeOutputs<ScopeType>,
  ScopeProviders<ScopeType>,
  ScopeResources<ScopeType>,
  ScopeDataSources<ScopeType>,
  ScopeModules<ScopeType>
>;
