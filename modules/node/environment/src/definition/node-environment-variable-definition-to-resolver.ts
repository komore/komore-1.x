import { identity } from '@komore/functional';

import { nodeEnvironmentError } from '../node-environment.error';
import { type NodeEnvironmentVariableDefinition } from './node-environment-variable-definition';
import { type NodeEnvironmentVariableResolver } from './node-environment-variable-resolver';

/**
 * Returns a Node environment variable resolver, given a definition
 *
 * @param environmentVariableDefinition Environment variable definition
 * @returns Environment variable resolver
 * @template T Variable type
 * @template Optional Whether the variable is optional
 * @private
 */
export function nodeEnvironmentVariableDefinitionToResolver<T, Optional extends boolean>(
  environmentVariableDefinition: NodeEnvironmentVariableDefinition<T, Optional>
): NodeEnvironmentVariableResolver<T> {
  const { defaultValue, description, optional = false, parse = identity } = environmentVariableDefinition;

  return (variableValue, name) => {
    const value = variableValue !== undefined ? parse(variableValue) : defaultValue;

    if (value === undefined && !optional) {
      throw nodeEnvironmentError.missingVariable({ description, name });
    }

    return value as T;
  };
}
