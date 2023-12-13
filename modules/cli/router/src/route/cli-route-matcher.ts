import { type GenericCommand } from '@komore/command';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CliFlagParameterDefinition } from '../definition/parameter/cli-flag-parameter-definition';
import { type CliParametersTypeFromCliParameterDefinitions } from '../definition/parameter/cli-parameters-type-from-cli-parameter-definitions';
import { type CliPathParameterDefinition } from '../definition/parameter/cli-path-parameter-definition';

/**
 * Command-line interface router matcher
 *
 * @template RouteParameters Router parameters
 * @template CommandType Command type
 */
export interface CliRouteMatcher<
  PathDefinitions extends ReadonlyRecord<string, CliPathParameterDefinition<unknown, boolean>>,
  FlagDefinitions extends ReadonlyRecord<string, CliFlagParameterDefinition<unknown, boolean>>,
  CommandType extends GenericCommand,
> {
  /**
   * Returns route parameters, given a set of path and flag parameters
   *
   * @param pathParameters Path parameters
   * @param flagParameters Flag parameters
   * @returns Route parameters
   */
  commandLineToParameters(
    pathParameters: ReadonlyArray<string>,
    flagParameters: ReadonlyRecord<string, string>
  ): CliParametersTypeFromCliParameterDefinitions<PathDefinitions & FlagDefinitions> | undefined;
  /**
   * Returns a command, given route parameters
   *
   * @param routeParameters Route parameters
   * @param commandLine Command line
   * @returns Command
   */
  parametersToCommand(
    routeParameters: CliParametersTypeFromCliParameterDefinitions<PathDefinitions & FlagDefinitions>,
    commandLine: ReadonlyArray<string>
  ): CommandType;
}
