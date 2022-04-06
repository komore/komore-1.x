import { entriesToObject, objectToEntries } from '@komore/functional';
import { map, type OperatorFunction } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';
import { TerraformVariable } from 'cdktf';
import { type GenericScope } from '../scope/generic-scope';
import { type ScopeWithAddedVariables } from '../scope/scope-with-added-variables';
import { type ScopedConfiguration } from '../scope/scoped-configuration';
import { type StackTypeNames } from '../type/stack-type-names';
import { type TypedTerraformVariableConfig } from '../type/typed-terraform-variable-config';
import { resolveScopedConfiguration } from './resolve-scoped-configuration';

/**
 * Adds variables
 * @param variableDefinitions Variable definitions
 * @returns Operator function that adds variables to a scope
 * @template ScopeType Scope type
 * @template VariableDefinitions Variable definitions type
 */
export function variables<
  ScopeType extends GenericScope,
  VariableDefinitions extends ReadonlyRecord<string, TypedTerraformVariableConfig<keyof StackTypeNames>>
>(
  variableDefinitions: ScopedConfiguration<ScopeType, VariableDefinitions>
): OperatorFunction<ScopeType, ScopeWithAddedVariables<ScopeType, VariablesFromDefinitions<VariableDefinitions>>> {
  // TODO: would break when running more than once
  return map(scope => {
    const definitions = resolveScopedConfiguration(scope, variableDefinitions);
    const variableEntries = objectToEntries(definitions).map(([variableId, variableConfig]) => {
      const variableType = variableConfig.type;
      const variable = new TerraformVariable(scope.construct, variableId, variableConfig);
      const variableValue =
        variableType === 'string'
          ? variable.stringValue
          : variableType === 'number'
          ? variable.numberValue
          : (variable.booleanValue as unknown as boolean);
      return [variableId, variableValue] as const;
    });
    const variables = entriesToObject(variableEntries);

    return {
      ...scope,
      variables: {
        ...scope.variables,
        ...variables,
      },
    } as unknown as ScopeWithAddedVariables<ScopeType, VariablesFromDefinitions<VariableDefinitions>>;
  });
}

type VariablesFromDefinitions<
  VariableDefinitions extends ReadonlyRecord<string, TypedTerraformVariableConfig<keyof StackTypeNames>>
> = {
  [VariableId in keyof VariableDefinitions]: VariableTypeFromDefinition<VariableDefinitions[VariableId]>;
};

type VariableTypeFromDefinition<Config extends TypedTerraformVariableConfig<keyof StackTypeNames>> =
  Config extends TypedTerraformVariableConfig<infer StackTypeName> ? StackTypeNames[StackTypeName] : never;
