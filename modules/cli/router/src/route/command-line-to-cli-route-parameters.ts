import { type ReadonlyRecord } from '@komore/typescript';

import { type CliFlagParameterDefinition } from '../definition/parameter/cli-flag-parameter-definition';
import { type CliPathParameterDefinitionsFromCliRoutePath } from '../definition/parameter/cli-path-parameter-definitions-from-cli-route-path';
import { type CliParametersTypeFromCliParameterDefinitions } from '../definition/parameter/cli-parameters-type-from-cli-parameter-definitions';
import { cliFlagParametersToRouteFlagParameters } from './cli-flag-parameters-to-route-flag-parameters';
import { cliPathParametersToRoutePathParameters } from './cli-path-parameters-to-route-path-parameters';

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
  flagDefinitions: FlagDefinitions
): (
  pathParameters: ReadonlyArray<string>,
  flagParameters: ReadonlyRecord<string, string>
) => CliParametersTypeFromCliParameterDefinitions<PathDefinitions & FlagDefinitions> | undefined {
  const toRoutePathParameters = cliPathParametersToRoutePathParameters(path, pathDefinitions);
  const toRouteFlagParameters = cliFlagParametersToRouteFlagParameters(flagDefinitions);
  return (pathParameters, flagParameters) => {
    const routePathParameters = pathParameters.reduce(toRoutePathParameters, {});
    if (routePathParameters === undefined) {
      return undefined;
    }

    const routeFlagParameters = toRouteFlagParameters(flagParameters);
    console.log('hmkaythen', path, pathParameters, routePathParameters, flagParameters, routeFlagParameters);
    return {
      ...routePathParameters,
      ...routeFlagParameters,
    } as unknown as CliParametersTypeFromCliParameterDefinitions<PathDefinitions & FlagDefinitions>;
  };
}
