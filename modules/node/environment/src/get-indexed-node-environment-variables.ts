import { type ReadonlyRecord } from '@komore/typescript';

import { type NodeEnvironmentVariableDefinition } from './definition/node-environment-variable-definition';
import { type NodeEnvironmentVariableObject } from './definition/node-environment-variable-object';
import { getIndexedNodeEnvironmentVariablesCount } from './indexed/get-indexed-node-environment-variables-count';
import { indexToIndexedNodeEnvironmentVariables } from './indexed/index-to-indexed-node-environment-variables';
import { type IndexedNodeEnvironmentVariableDefinitions } from './indexed/indexed-node-environment-variable-definitions';
import { type NodeEnvironmentVariables } from './node-environment-variables';

/**
 * Returns a list of indexed Node environment variables
 *
 * @param environmentVariables Environment variables
 * @param definitions Indexed environment variable definitions
 * @returns List of indexed environment variables
 * @template VariableDefinitions Environment variable definitions
 */
export function getIndexedNodeEnvironmentVariables<
  VariableDefinitions extends ReadonlyRecord<string, NodeEnvironmentVariableDefinition<unknown, boolean>>,
>(
  environmentVariables: NodeEnvironmentVariables,
  definitions: IndexedNodeEnvironmentVariableDefinitions<VariableDefinitions>
): ReadonlyArray<NodeEnvironmentVariableObject<VariableDefinitions>>;

/**
 * Returns a map of indexed environment variables
 *
 * @param environmentVariables Environment variables
 * @param definitions Indexed environment variable definitions
 * @param project Projection function
 * @returns Map of indexed environment variables
 * @template VariableDefinitions Environment variable definitions
 * @template KeyType Key type
 * @template ValueType Value type
 */
export function getIndexedNodeEnvironmentVariables<
  VariableDefinitions extends ReadonlyRecord<string, NodeEnvironmentVariableDefinition<unknown, boolean>>,
  KeyType,
  ValueType,
>(
  environmentVariables: NodeEnvironmentVariables,
  definitions: IndexedNodeEnvironmentVariableDefinitions<VariableDefinitions>,
  project: (
    variableObject: NodeEnvironmentVariableObject<VariableDefinitions>
  ) => readonly [key: KeyType, value: ValueType]
): ReadonlyMap<KeyType, ValueType>;

export function getIndexedNodeEnvironmentVariables<
  VariableDefinitions extends ReadonlyRecord<string, NodeEnvironmentVariableDefinition<unknown, boolean>>,
  KeyType,
  ValueType,
>(
  environmentVariables: NodeEnvironmentVariables,
  definitions: IndexedNodeEnvironmentVariableDefinitions<VariableDefinitions>,
  project?: (
    variableObject: NodeEnvironmentVariableObject<VariableDefinitions>
  ) => readonly [key: KeyType, value: ValueType]
): ReadonlyArray<NodeEnvironmentVariableObject<VariableDefinitions>> | ReadonlyMap<KeyType, ValueType> {
  const length = getIndexedNodeEnvironmentVariablesCount(environmentVariables, definitions);
  const toEnvironmentVariables = indexToIndexedNodeEnvironmentVariables(environmentVariables, definitions);
  const variableDefinitions = Array.from({ length })
    .map((_, index) => index)
    .map(toEnvironmentVariables);

  return project !== undefined ? new Map(variableDefinitions.map(project)) : variableDefinitions;
}
