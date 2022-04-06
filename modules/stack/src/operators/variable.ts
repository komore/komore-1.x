import { map, type OperatorFunction } from '@komore/reactive';
import { TerraformVariable, type TerraformVariableConfig } from 'cdktf';
import { type GenericScope } from '../scope/generic-scope';
import { type ScopedConfiguration } from '../scope/scoped-configuration';
import { type ScopeWithAddedVariable } from '../scope/scope-with-added-variable';
import { type StackTypeNames } from '../type/stack-type-names';
import { resolveScopedConfiguration } from './resolve-scoped-configuration';

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
  config: ScopedConfiguration<ScopeType, Omit<TerraformVariableConfig, 'type'> & { readonly type: VariableTypeName }>
): OperatorFunction<ScopeType, ScopeWithAddedVariable<ScopeType, VariableId, StackTypeNames[VariableTypeName]>> {
  return map(scope => {
    // TODO: would break when running more than once
    const variableConfig = resolveScopedConfiguration(scope, config);
    const variableType = variableConfig.type;
    const variable = new TerraformVariable(scope.construct, variableId, variableConfig);
    const variableValue =
      variableType === 'string'
        ? variable.stringValue
        : variableType === 'number'
        ? variable.numberValue
        : (variable.booleanValue as unknown as boolean);

    return {
      ...scope,
      variables: {
        ...scope.variables,
        [variableId]: variableValue,
      },
    } as unknown as ScopeWithAddedVariable<ScopeType, VariableId, StackTypeNames[VariableTypeName]>;
  });
}
