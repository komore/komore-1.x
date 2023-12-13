import { type ReadonlyRecord } from '@komore/typescript';

import { type CliFlagParameterDefinition } from '../definition/parameter/cli-flag-parameter-definition';
import { type CliPathParameterDefinitionsFromCliRoutePath } from '../definition/parameter/cli-path-parameter-definitions-from-cli-route-path';
import { type CliParametersTypeFromCliParameterDefinitions } from '../definition/parameter/cli-parameters-type-from-cli-parameter-definitions';
import { cliRoutePathPatternToRoutePathParameters } from './cli-route-path-pattern-to-route-path-parameters';

/**
 * Creates a function that returns a command-line route's parameters, given a command line
 *
 * @param path Path
 * @param pathDefinitions Path definitions
 * @param flagDefinitions Flag definitions
 * @returns
 * @template Path Path
 * @template PathDefinitions Path definitions
 * @template FlagDefinitions Flag definitions
 */
export function commandLineToCliRouteParameters<
  Path extends string,
  PathDefinitions extends CliPathParameterDefinitionsFromCliRoutePath<Path>,
  FlagDefinitions extends ReadonlyRecord<string, CliFlagParameterDefinition<unknown, boolean>>,
>(
  path: Path,
  pathDefinitions: PathDefinitions,
  _flagDefinitions: FlagDefinitions
): (
  pathParameters: ReadonlyArray<string>,
  flagParameters: ReadonlyRecord<string, string>
) => CliParametersTypeFromCliParameterDefinitions<PathDefinitions & FlagDefinitions> | undefined {
  const toRoutePathParameters = cliRoutePathPatternToRoutePathParameters(path, pathDefinitions);
  return (pathParameters, flagParameters) => {
    const routePathParameters = pathParameters.reduce(toRoutePathParameters, {});
    console.log('hmkaythen', path, pathParameters, routePathParameters, flagParameters);
    return routePathParameters as
      | CliParametersTypeFromCliParameterDefinitions<PathDefinitions & FlagDefinitions>
      | undefined;
  };
}
