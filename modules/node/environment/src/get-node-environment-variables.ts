import { type ReadonlyRecord } from '@komore/typescript';

import { type NodeEnvironmentVariableDefinition } from './definition/node-environment-variable-definition';
import { nodeEnvironmentVariableDefinitionsToResolvers } from './definition/node-environment-variable-definitions-to-resolvers';
import { nodeEnvironmentVariableEntriesToObject } from './definition/node-environment-variable-entries-to-object';
import { type NodeEnvironmentVariableObject } from './definition/node-environment-variable-object';
import { type NodeEnvironmentVariables } from './node-environment-variables';

/**
 * Returns Node environment variables, raising an error if one is missing
 *
 * @param environmentVariables Environment variables
 * @param definitions Environment variable definitions
 * @returns Environment variables
 * @template VariableDefinitions Environment variable definitions
 */
export function getNodeEnvironmentVariables<
  VariableDefinitions extends ReadonlyRecord<string, NodeEnvironmentVariableDefinition<any, boolean>>,
>(
  environmentVariables: NodeEnvironmentVariables,
  definitions: VariableDefinitions
): NodeEnvironmentVariableObject<VariableDefinitions> {
  const variableResolvers = nodeEnvironmentVariableDefinitionsToResolvers(definitions);
  const object = variableResolvers.reduce(
    nodeEnvironmentVariableEntriesToObject<VariableDefinitions>(environmentVariables, definition => definition.name),
    {} as ReadonlyRecord<keyof VariableDefinitions, any>
  );
  return object as NodeEnvironmentVariableObject<VariableDefinitions>;
}
