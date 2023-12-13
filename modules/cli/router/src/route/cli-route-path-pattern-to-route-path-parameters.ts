import { type CliPathParameterDefinitionsFromCliRoutePath } from '../definition/parameter/cli-path-parameter-definitions-from-cli-route-path';

/**
 * Creates a function that reduces a list of command-line parameters to path parameters
 *
 * @param path Path
 * @param pathDefinitions Path definitions
 * @returns Function that reduces a list of command-line parameters to path parameters
 */
export function cliRoutePathPatternToRoutePathParameters<
  Path extends string,
  PathDefinitions extends CliPathParameterDefinitionsFromCliRoutePath<Path>,
>(
  path: Path,
  _pathDefinitions: PathDefinitions
): (
  pathParameters: Partial<CliPathParameterDefinitionsFromCliRoutePath<Path>> | undefined,
  parameterValue: string,
  index: number
) => Partial<CliPathParameterDefinitionsFromCliRoutePath<Path>> | undefined {
  const transformers = path
    .split(' ')
    .map(parameterName =>
      parameterName.startsWith(':') ? (value: string) => ({ [parameterName.slice(1)]: value }) : parameterName
    );
  return (pathParameters, parameterValue, index) => {
    if (pathParameters === undefined) {
      return undefined;
    }

    const transformer = transformers[index] ?? '';
    if (typeof transformer === 'string') {
      return transformer === parameterValue ? pathParameters : undefined;
    }

    const newPathParameters = transformer(parameterValue);
    return {
      ...pathParameters,
      ...newPathParameters,
    };
  };
}
