import { type GenericCommand } from '@komore/command';
import { type ReadonlyRecord } from '@komore/typescript';

import { type GenericCliRouteDefinition } from './generic-cli-route-definition';

/**
 * Command-line interface route definition
 */
export interface CliRouteDefinition<
  ChildDefinitions extends ReadonlyRecord<string, GenericCliRouteDefinition> = {},
  CommandType extends GenericCommand = GenericCommand,
> {
  /**
   * Child routes
   */
  readonly children?: ChildDefinitions;
  // TODO: allow using a command type directly rather than mapping route parameters
  readonly command?: () => CommandType;
}
