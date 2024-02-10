import { type ReadonlyRecord } from '@komore/typescript';

import { type NodeEnvironmentVariableDefinition } from '../definition/node-environment-variable-definition';

/**
 * Indexed Node environment variable definitions
 *
 * @template VariableDefinitions Variable definitions
 * @private
 */
export interface IndexedNodeEnvironmentVariableDefinitions<
  VariableDefinitions extends ReadonlyRecord<string, NodeEnvironmentVariableDefinition<any, boolean>>,
> {
  /**
   * Variable definitions
   */
  readonly definitions: VariableDefinitions;
  /**
   * Prefix for all environment variable names
   */
  readonly prefix: string;
}
