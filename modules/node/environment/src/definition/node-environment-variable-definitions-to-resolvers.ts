import { objectToEntries } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';

import { type NodeEnvironmentVariableDefinition } from './node-environment-variable-definition';
import { nodeEnvironmentVariableDefinitionToResolver } from './node-environment-variable-definition-to-resolver';
import { type NodeEnvironmentVariableEntry } from './node-environment-variable-entry';

/**
 * Returns a list of resolvers, given Node environment variable definitions
 *
 * @param definitions Node environment variable definitions
 * @returns List of resolvers
 * @template VariableDefinitions Variable definitions type
 * @private
 */
export function nodeEnvironmentVariableDefinitionsToResolvers<
  VariableDefinitions extends ReadonlyRecord<string, NodeEnvironmentVariableDefinition<unknown, boolean>>,
>(definitions: VariableDefinitions): ReadonlyArray<NodeEnvironmentVariableEntry<VariableDefinitions>> {
  return objectToEntries(definitions).map(([propertyKey, variableDefinition]) => {
    const variableResolver = nodeEnvironmentVariableDefinitionToResolver(variableDefinition);
    return [propertyKey, variableDefinition, variableResolver] as const;
  }) as unknown as ReadonlyArray<NodeEnvironmentVariableEntry<VariableDefinitions>>;
}
