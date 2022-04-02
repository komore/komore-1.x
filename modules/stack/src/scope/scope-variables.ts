import { type ReadonlyRecord } from '@komore/typescript';
import { type StackType } from '../type/stack-type';

/**
 * Scope variables
 * @template Variables Variable names and types
 */
export interface ScopeVariables<Variables extends ReadonlyRecord<string, StackType>> {
  readonly variables: Variables;
}

export type GenericScopeVariables = ScopeVariables<ReadonlyRecord<string, StackType>>;
