import type { ReadonlyRecord } from '@komore/typescript';
import type { GenericScope, TypedVariable, Types } from '@komore/stack';

/**
 * Scope with an added variable
 * @template ScopeType Scope type
 * @template VariableName Variable name
 * @template VariableType Variable type
 */
export type ScopeWithAddedVariable<
  ScopeType extends GenericScope,
  VariableId extends string,
  VariableType extends keyof Types
> = ScopeType & {
  readonly variables: ReadonlyRecord<VariableId, TypedVariable<VariableType>>;
};
