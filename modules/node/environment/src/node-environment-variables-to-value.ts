import { type ReadonlyRecord } from '@komore/typescript';

import { type NodeEnvironmentVariableDefinition } from './definition/node-environment-variable-definition';
import { nodeEnvironmentVariableDefinitionsToResolvers } from './definition/node-environment-variable-definitions-to-resolvers';
import { nodeEnvironmentVariableEntriesToObject } from './definition/node-environment-variable-entries-to-object';
import { type NodeEnvironmentVariableObject } from './definition/node-environment-variable-object';
import { type NodeEnvironmentVariables } from './node-environment-variables';

/**
 * Creates a function that returns a value, given Node environment variables
 *
 * @param definitions Environment variable definitions
 * @returns Function that returns a value, given Node environment variables
 * @template VariableDefinitions Environment variable definitions
 */
export function nodeEnvironmentVariablesToValue<
  VariableDefinitions extends ReadonlyRecord<string, NodeEnvironmentVariableDefinition<any, boolean>>,
>(
  definitions: VariableDefinitions
): (environmentVariables: NodeEnvironmentVariables) => NodeEnvironmentVariableObject<VariableDefinitions> {
  return environmentVariables => {
    const variableResolvers = nodeEnvironmentVariableDefinitionsToResolvers(definitions);
    const object = variableResolvers.reduce(
      nodeEnvironmentVariableEntriesToObject<VariableDefinitions>(environmentVariables, definition => definition.name),
      {} as ReadonlyRecord<keyof VariableDefinitions, any>
    );
    return object as NodeEnvironmentVariableObject<VariableDefinitions>;
  };
}
