import { type NodeEnvironmentVariableDefinition } from './definition/node-environment-variable-definition';
import { nodeEnvironmentVariableDefinitionToResolver } from './definition/node-environment-variable-definition-to-resolver';
import { type NodeEnvironmentVariableObjectProperty } from './definition/node-environment-variable-object-property';
import { type NodeEnvironmentVariables } from './node-environment-variables';

/**
 * Returns a Node environment variable
 *
 * @param environmentVariables Environment variables
 * @param definitions Environment variable definition
 * @returns Environment variable
 * @template VariableDefinition Environment variable definition
 */
export function getNodeEnvironmentVariables<VariableDefinition extends NodeEnvironmentVariableDefinition<any, boolean>>(
  environmentVariables: NodeEnvironmentVariables,
  definition: VariableDefinition
): NodeEnvironmentVariableObjectProperty<VariableDefinition> {
  const { name: variableName } = definition;
  const variableResolver = nodeEnvironmentVariableDefinitionToResolver(definition);
  const variableString = environmentVariables[variableName];
  return variableResolver(variableString, variableName);
}
