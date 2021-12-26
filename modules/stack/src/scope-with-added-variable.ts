import { type ReadonlyRecord } from '@komore/typescript';
import { type GenericScope, type TypedVariable, type Types } from '@komore/stack';

/**
 * Scope with an added variable
 * @template ScopeType Scope type
 * @template VariableTypeName Variable type name
 * @template VariableId Variable identifier
 */
export type ScopeWithAddedVariable<
  ScopeType extends GenericScope,
  VariableTypeName extends keyof Types,
  VariableId extends string
> = ScopeType & {
  readonly variables: ReadonlyRecord<VariableId, TypedVariable<VariableTypeName>>;
};
