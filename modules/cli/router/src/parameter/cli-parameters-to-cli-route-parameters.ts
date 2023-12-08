import { type ReadonlyRecord } from '@komore/typescript';

import { type CliRouteParameters } from './cli-route-parameters';
import { isCliFlagParameter } from './is-cli-flag-parameters';

/**
 * Returns command-line interface parameters, given a list of command-line tokens
 *
 * @param commandLine Command-line parameters
 * @returns Command-line interface parameters
 */
export function cliParametersToCliRouteParameters(
  commandLine: ReadonlyArray<string>
): CliRouteParameters<ReadonlyRecord<string, unknown>> {
  const firstFlagIndex = commandLine.findIndex(isCliFlagParameter);
  const [commands, flagParameters] =
    firstFlagIndex !== -1
      ? ([commandLine.slice(0, firstFlagIndex), commandLine.slice(firstFlagIndex)] as const)
      : ([commandLine, [] as ReadonlyArray<string>] as const);
  const parameters = flagParameters.reduce(flagParametersToParameters, {});
  console.log('commands', commands);
  return { parameters, commandLine };
}

function flagParametersToParameters(
  acc: Record<string, unknown>,
  parameter: string,
  index: number,
  parameters: ReadonlyArray<string>
): Record<string, unknown> {
  if (isCliFlagParameter(parameter)) {
    const parameterName = parameter.substring(2);
    const nextParameter = parameters[index + 1];
    const parameterValue =
      nextParameter !== undefined && !isCliFlagParameter(nextParameter) ? nextParameter : undefined;
    return {
      ...acc,
      [parameterName]: parameterValue,
    };
  }

  return acc;
}
