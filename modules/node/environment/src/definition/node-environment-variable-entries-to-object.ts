import { type ReadonlyRecord } from '@komore/typescript';

import { type NodeEnvironmentVariables } from '../node-environment-variables';
import { type NodeEnvironmentVariableDefinition } from './node-environment-variable-definition';
import { type NodeEnvironmentVariableDefinitionType } from './node-environment-variable-definition-type';
import { type NodeEnvironmentVariableEntry } from './node-environment-variable-entry';

/**
 * Creates a function that reduces environment variable entries to an environment variable object
 *
 * @param environmentVariables Environment variables
 * @param variableNameResolver Variable name resolver
 * @returns Function that reduces environment variable entries to an environment variable object
 * @template VariableDefinitions Variable definitions type
 * @private
 */
export function nodeEnvironmentVariableEntriesToObject<
  VariableDefinitions extends ReadonlyRecord<string, NodeEnvironmentVariableDefinition<unknown, boolean>>,
>(
  environmentVariables: NodeEnvironmentVariables,
  variableNameResolver: (
    definition: NodeEnvironmentVariableDefinitionType<VariableDefinitions>,
    propertyKey: keyof VariableDefinitions
  ) => string
): (
  obj: Record<keyof VariableDefinitions, unknown>,
  environmentVariableEntry: NodeEnvironmentVariableEntry<VariableDefinitions>
) => Record<keyof VariableDefinitions, unknown> {
  return (obj, [propertyKey, definition, resolver]) => {
    const variableName = variableNameResolver(definition, propertyKey);
    const variableString = environmentVariables[variableName];
    const propertyValue = resolver(variableString, variableName);
    obj[propertyKey] = propertyValue;
    return obj;
  };
}
