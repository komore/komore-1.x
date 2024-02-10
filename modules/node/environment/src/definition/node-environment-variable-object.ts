import { type Expand, type ReadonlyRecord } from '@komore/typescript';

import { type NodeEnvironmentVariableDefinition } from './node-environment-variable-definition';
import { type NodeEnvironmentVariableObjectProperty } from './node-environment-variable-object-property';

/**
 * Environment variable object
 *
 * @template VariableDefinitions Variable definitions type
 */
export type NodeEnvironmentVariableObject<
  VariableDefinitions extends ReadonlyRecord<string, NodeEnvironmentVariableDefinition<unknown, boolean>>,
> = Expand<{
  readonly [K in keyof VariableDefinitions]: NodeEnvironmentVariableObjectProperty<VariableDefinitions[K]>;
}>;
