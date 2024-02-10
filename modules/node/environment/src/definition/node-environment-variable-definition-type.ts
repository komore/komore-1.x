import { type ReadonlyRecord } from '@komore/typescript';

import { type NodeEnvironmentVariableDefinition } from './node-environment-variable-definition';

/**
 * Node environment variable definition type
 *
 * @private
 */
export type NodeEnvironmentVariableDefinitionType<
  T extends ReadonlyRecord<string, NodeEnvironmentVariableDefinition<unknown, boolean>>,
> = T extends ReadonlyRecord<string, infer DefinitionType> ? DefinitionType : never;
