import { type ReadonlyRecord } from '@komore/typescript';

import { type NodeEnvironmentVariableDefinition } from '../definition/node-environment-variable-definition';
import { type NodeEnvironmentVariables } from '../node-environment-variables';
import { type IndexedNodeEnvironmentVariableDefinitions } from './indexed-node-environment-variable-definitions';

/**
 * Returns the number of indices available for a group of indexed Node environment variables
 *
 * @param environmentVariables Environment variables
 * @param variableDefinitions Indexed environment variable definitions
 * @returns Number of indices
 * @template VariableDefinitions Indexed environment variable definitions
 * @private
 */
export function getIndexedNodeEnvironmentVariablesCount<
  VariableDefinitions extends ReadonlyRecord<string, NodeEnvironmentVariableDefinition<any, boolean>>,
>(
  environmentVariables: NodeEnvironmentVariables,
  variableDefinitions: IndexedNodeEnvironmentVariableDefinitions<VariableDefinitions>
): number {
  const { definitions, prefix } = variableDefinitions;
  const requiredSuffixes = Object.values(definitions)
    .filter(({ optional }) => optional !== true)
    .map(({ name }) => name);

  let count = 0;
  let validIteration = false;

  do {
    const baseVariableName = `${prefix}_${count}_`;
    const variableNames = requiredSuffixes.map(suffix => baseVariableName + suffix);

    validIteration = variableNames.every(variableName => environmentVariables[variableName] !== undefined);
    if (validIteration) {
      ++count;
    }
  } while (validIteration);

  return count;
}
