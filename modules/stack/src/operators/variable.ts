import { map, type OperatorFunction } from '@komore/reactive';
import { TerraformVariable, type TerraformVariableConfig } from 'cdktf';
import { type GenericScope } from '../scope/generic-scope';
import { type ScopedConfiguration } from '../scope/scoped-configuration';
import { type ScopeWithAddedVariable } from '../scope/scope-with-added-variable';
import { type TypedVariable } from '../type/typed-variable';
import { type StackTypeNames } from '../type/stack-type-names';
import { resolveConfig } from './resolve-config';

/**
 * Adds a variable
 *
 * @param variableId Variable identifier
 * @param config Configuration or function that returns the configuration
 * @returns Operator function that adds a variable to a scope
 * @template ScopeType Scope type
 * @template VariableTypeName Output type name
 * @template VariableId Variable identifier
 */
export function variable<
  ScopeType extends GenericScope,
  VariableTypeName extends keyof StackTypeNames,
  VariableId extends string
>(
  variableId: VariableId,
  config: ScopedConfiguration<ScopeType, TerraformVariableConfig & { readonly type: VariableTypeName }>
): OperatorFunction<ScopeType, ScopeWithAddedVariable<ScopeType, VariableId, StackTypeNames[VariableTypeName]>> {
  return map(scope => {
    const variableConfig = resolveConfig(scope, config);
    const variable = new TerraformVariable(scope.construct, variableId, variableConfig) as unknown as TypedVariable<
      StackTypeNames[VariableTypeName]
    >;
    return {
      ...scope,
      variables: {
        ...scope.variables,
        [variableId]: variable.value,
      },
    } as unknown as ScopeWithAddedVariable<ScopeType, VariableId, StackTypeNames[VariableTypeName]>;
  });
}
