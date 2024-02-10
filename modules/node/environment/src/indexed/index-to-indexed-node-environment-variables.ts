import { type ReadonlyRecord } from '@komore/typescript';

import { type NodeEnvironmentVariableDefinition } from '../definition/node-environment-variable-definition';
import { nodeEnvironmentVariableDefinitionsToResolvers } from '../definition/node-environment-variable-definitions-to-resolvers';
import { nodeEnvironmentVariableEntriesToObject } from '../definition/node-environment-variable-entries-to-object';
import { type NodeEnvironmentVariableObject } from '../definition/node-environment-variable-object';
import { type NodeEnvironmentVariables } from '../node-environment-variables';
import { type IndexedNodeEnvironmentVariableDefinitions } from './indexed-node-environment-variable-definitions';

/**
 * Creates a function that returns indexed environment variables for a specific index
 *
 * @param environmentVariables Environment variables
 * @param variableDefinitions Environment variable definitions
 * @returns Function that returns indexed environment variables for a specific index
 * @template VariableDefinitions Environment variable definitions
 * @private
 */
export function indexToIndexedNodeEnvironmentVariables<
  VariableDefinitions extends ReadonlyRecord<string, NodeEnvironmentVariableDefinition<any, boolean>>,
>(
  environmentVariables: NodeEnvironmentVariables,
  variableDefinitions: IndexedNodeEnvironmentVariableDefinitions<VariableDefinitions>
): (index: number) => NodeEnvironmentVariableObject<VariableDefinitions> {
  const { definitions } = variableDefinitions;
  const variableResolvers = nodeEnvironmentVariableDefinitionsToResolvers(definitions);

  return index => {
    const prefix = `${variableDefinitions.prefix}_${index}_`;
    const object = variableResolvers.reduce(
      nodeEnvironmentVariableEntriesToObject<VariableDefinitions>(
        environmentVariables,
        definition => prefix + definition.name
      ),
      {} as Record<keyof VariableDefinitions, unknown>
    );
    return object as NodeEnvironmentVariableObject<VariableDefinitions>;
  };
}
