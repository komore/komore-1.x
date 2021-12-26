import { type DataSourceMap } from './data-source-map';
import { type ResourceMap } from './resource-map';
import { type Scope } from './scope';
import { type ScopeWithAddedVariable } from './scope-with-added-variable';
import { type TypedLocal } from './typed-local';
import { type TypedOutput } from './typed-output';
import { type TypedVariable } from './typed-variable';
import { type Types } from './types';

/**
 * Adds a variable to a scope
 * @param scope Scope
 * @param variableId Variable identifier
 * @param variable Variable
 * @returns Scope with the added variable
 * @template Variables Variables
 * @template Locals Locals
 * @template Outputs Outputs
 * @template Resources Resources
 * @template DataSources Data sources
 * @template VariableTypeName Variable type name
 * @template VariableId Variable identifier
 */
export function addVariable<
  Variables extends Record<string, TypedVariable<keyof Types>>,
  Locals extends Record<string, TypedLocal<keyof Types>>,
  Outputs extends Record<string, TypedOutput<keyof Types>>,
  Resources extends Record<string, ResourceMap<string>>,
  DataSources extends Record<string, DataSourceMap<string>>,
  VariableTypeName extends keyof Types,
  VariableId extends string
>(
  scope: Scope<Variables, Locals, Outputs, Resources, DataSources>,
  variableId: VariableId,
  variable: TypedVariable<VariableTypeName>
): ScopeWithAddedVariable<typeof scope, VariableTypeName, VariableId> {
  return {
    ...scope,
    variables: {
      ...scope.variables,
      [variableId]: variable
    }
  };
}
