import { type ReadonlyRecord } from '@komore/typescript';

import { type NodeEnvironmentVariableDefinition } from './definition/node-environment-variable-definition';
import { type NodeEnvironmentVariableObject } from './definition/node-environment-variable-object';
import { getIndexedNodeEnvironmentVariablesCount } from './indexed/get-indexed-node-environment-variables-count';
import { indexToIndexedNodeEnvironmentVariables } from './indexed/index-to-indexed-node-environment-variables';
import { type IndexedNodeEnvironmentVariableDefinitions } from './indexed/indexed-node-environment-variable-definitions';
import { type NodeEnvironmentVariables } from './node-environment-variables';

/**
 * Creates a function that returns a list of indexed Node environment variables
 *
 * @param definitions Indexed environment variable definitions
 * @returns Function that returns a list of indexed Node environment variables
 * @template VariableDefinitions Environment variable definitions
 */
export function nodeEnvironmentVariablesToValues<
  VariableDefinitions extends ReadonlyRecord<string, NodeEnvironmentVariableDefinition<unknown, boolean>>,
>(
  definitions: IndexedNodeEnvironmentVariableDefinitions<VariableDefinitions>
): (
  environmentVariables: NodeEnvironmentVariables
) => ReadonlyArray<NodeEnvironmentVariableObject<VariableDefinitions>>;

/**
 * Creates a function that returns a map of indexed environment variables
 *
 * @param definitions Indexed environment variable definitions
 * @param project Projection function
 * @returns Function that returns a map of indexed environment variables
 * @template VariableDefinitions Environment variable definitions
 * @template KeyType Key type
 * @template ValueType Value type
 */
export function nodeEnvironmentVariablesToValues<
  VariableDefinitions extends ReadonlyRecord<string, NodeEnvironmentVariableDefinition<unknown, boolean>>,
  KeyType,
  ValueType,
>(
  definitions: IndexedNodeEnvironmentVariableDefinitions<VariableDefinitions>,
  project: (
    variableObject: NodeEnvironmentVariableObject<VariableDefinitions>
  ) => readonly [key: KeyType, value: ValueType]
): (environmentVariables: NodeEnvironmentVariables) => ReadonlyMap<KeyType, ValueType>;

export function nodeEnvironmentVariablesToValues<
  VariableDefinitions extends ReadonlyRecord<string, NodeEnvironmentVariableDefinition<unknown, boolean>>,
  KeyType,
  ValueType,
>(
  definitions: IndexedNodeEnvironmentVariableDefinitions<VariableDefinitions>,
  project?: (
    variableObject: NodeEnvironmentVariableObject<VariableDefinitions>
  ) => readonly [key: KeyType, value: ValueType]
): (
  environmentVariables: NodeEnvironmentVariables
) => ReadonlyArray<NodeEnvironmentVariableObject<VariableDefinitions>> | ReadonlyMap<KeyType, ValueType> {
  return environmentVariables => {
    const length = getIndexedNodeEnvironmentVariablesCount(environmentVariables, definitions);
    const toEnvironmentVariables = indexToIndexedNodeEnvironmentVariables(environmentVariables, definitions);
    const variableDefinitions = Array.from({ length })
      .map((_, index) => index)
      .map(toEnvironmentVariables);

    return project !== undefined ? new Map(variableDefinitions.map(project)) : variableDefinitions;
  };
}
