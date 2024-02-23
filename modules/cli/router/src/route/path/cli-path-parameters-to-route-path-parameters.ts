import { type CliPathParameterDefinition } from '../../definition/parameter/cli-path-parameter-definition';
import { type CliPathParameterDefinitionsFromCliRoutePath } from '../../definition/parameter/cli-path-parameter-definitions-from-cli-route-path';
import { cliPathParameterToRoutePathParameter } from './cli-path-parameter-to-route-path-parameter';

/**
 * Creates a function that reduces a list of command-line parameters to path parameters
 *
 * @param path Path
 * @param pathDefinitions Path definitions
 * @returns Function that reduces a list of command-line parameters to path parameters
 */
export function cliPathParametersToRoutePathParameters<
  Path extends string,
  PathDefinitions extends CliPathParameterDefinitionsFromCliRoutePath<Path>,
>(
  path: Path,
  pathDefinitions: PathDefinitions
): (
  pathParameters: Partial<CliPathParameterDefinitionsFromCliRoutePath<Path>> | undefined,
  parameterValue: string,
  index: number
) => Partial<CliPathParameterDefinitionsFromCliRoutePath<Path>> | undefined {
  const transformers = path.split(' ').map(parameterName => {
    if (!parameterName.startsWith(':')) {
      return parameterName;
    }

    const definedName = parameterName.slice(1) as keyof PathDefinitions & string;
    const pathDefinition = pathDefinitions[definedName] as CliPathParameterDefinition<unknown, boolean>;

    return cliPathParameterToRoutePathParameter(definedName, pathDefinition);
  });

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
