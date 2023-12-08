import { type GenericCommand } from '@komore/command';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CliRouteParameters } from '../parameter/cli-route-parameters';
import { type GenericCliRouteDefinition } from './generic-cli-route-definition';

/**
 * Command-line interface route definition
 */
export interface CliRouteDefinition<
  Path extends string,
  ChildDefinitions extends ReadonlyRecord<string, GenericCliRouteDefinition> = {},
  CommandType extends GenericCommand = GenericCommand,
> {
  /**
   * Child routes
   */
  readonly children?: ChildDefinitions;
  /**
   * Command factory
   */
  readonly command: (parameters: CliRouteParameters<ReadonlyRecord<string, unknown>>) => CommandType;
  /**
   * Path
   */
  readonly path: Path;
}
