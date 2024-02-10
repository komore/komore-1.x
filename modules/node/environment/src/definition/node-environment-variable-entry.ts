import { type ReadonlyRecord } from '@komore/typescript';

import { type NodeEnvironmentVariableDefinition } from './node-environment-variable-definition';
import { type NodeEnvironmentVariableDefinitionType } from './node-environment-variable-definition-type';
import { type NodeEnvironmentVariableResolver } from './node-environment-variable-resolver';

/**
 * Node environment variable entry
 *
 * @template VariableDefinitions Variable definitions type
 * @private
 */
export type NodeEnvironmentVariableEntry<
  VariableDefinitions extends ReadonlyRecord<string, NodeEnvironmentVariableDefinition<unknown, boolean>>,
> = readonly [
  propertyKey: keyof VariableDefinitions,
  variableDefinition: NodeEnvironmentVariableDefinitionType<VariableDefinitions>,
  resolver: NodeEnvironmentVariableResolver<unknown>,
];
