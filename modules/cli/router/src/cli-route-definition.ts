import { type ReadonlyRecord } from '@komore/typescript';
import { type GenericCliRouteDefinition } from './generic-cli-route-definition';

/**
 * Command-line interface route definition
 */
export interface CliRouteDefinition<ChildDefinitions extends ReadonlyRecord<string, GenericCliRouteDefinition> = {}> {
  /**
   * Child routes
   */
  readonly children?: ChildDefinitions;
}
