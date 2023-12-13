import { type ReadonlyRecord } from '@komore/typescript';

import { type CliParameterDefinition } from './parameter/cli-parameter-definition';
import { type CliPathParameterDefinitionsFromCliRoutePath } from './parameter/cli-path-parameter-definitions-from-cli-route-path';
import { type GenericCliRouteDefinition } from './generic-cli-route-definition';

/**
 * Command-line interface route definition
 *
 * @template Path Path
 * @template PathDefinitions Flag definitions
 * @template FlagDefinitions Flag definitions
 * @template ChildDefinitions Child definitions
 */
export interface CliRouteDefinition<
  Path extends string,
  PathDefinitions extends CliPathParameterDefinitionsFromCliRoutePath<Path>,
  FlagDefinitions extends ReadonlyRecord<string, CliParameterDefinition<unknown, boolean>>,
  ChildDefinitions extends ReadonlyArray<GenericCliRouteDefinition>,
> {
  /**
   * Child definitions
   */
  readonly children?: ChildDefinitions;
  /**
   * Flag definitions
   */
  readonly flag?: FlagDefinitions;
  /**
   * Path definitions
   */
  readonly path: PathDefinitions;
  /**
   * Path pattern
   */
  readonly pathPattern: Path;
}
