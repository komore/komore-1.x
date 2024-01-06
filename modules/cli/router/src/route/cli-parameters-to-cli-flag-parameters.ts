import { isCliFlagParameter } from './is-cli-flag-parameters';

/**
 * Reduces command-line parameters to a record of command-line flag parameters
 *
 * @param acc Accumulator
 * @param parameter Command-line parameter
 * @param index Command-line parameter index
 * @param parameters List of command-line parameters
 * @returns Accumulator with an additional flag parameter, if one was found
 */
export function cliParametersToCliFlagParameters(
  acc: Record<string, string>,
  parameter: string,
  index: number,
  parameters: ReadonlyArray<string>
): Record<string, string> {
  if (!isCliFlagParameter(parameter)) {
    return acc;
  }

  const parameterName = parameter.substring(2);
  const nextParameter = parameters[index + 1];
  const parameterValue = nextParameter !== undefined && !isCliFlagParameter(nextParameter) ? nextParameter : undefined;
  return {
    ...acc,
    [parameterName]: parameterValue ?? '',
  };
}
