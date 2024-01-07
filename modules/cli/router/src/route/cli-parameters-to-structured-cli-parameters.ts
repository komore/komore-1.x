import { type ReadonlyRecord } from '@komore/typescript';

import { isCliFlagParameter } from './is-cli-flag-parameters';
import { cliParametersToCliFlagParameters } from './cli-parameters-to-cli-flag-parameters';

/**
 * Returns structed command-line interface parameters, given a list of command-line tokens
 *
 * @param commandLine Command-line parameters
 * @returns Structured command-line interface parameters
 */
export function cliParametersToStructuredCliParameters(
  commandLine: ReadonlyArray<string>
): readonly [
  pathParameters: ReadonlyArray<string>,
  flagParameters: ReadonlyRecord<string, string>,
  commandLine: ReadonlyArray<string>,
] {
  const firstFlagIndex = commandLine.findIndex(isCliFlagParameter);
  const [pathParameters, commandLineFlagParameters] =
    firstFlagIndex !== -1
      ? ([commandLine.slice(0, firstFlagIndex), commandLine.slice(firstFlagIndex)] as const)
      : ([commandLine, [] as ReadonlyArray<string>] as const);
  const flagParameters = commandLineFlagParameters.reduce(cliParametersToCliFlagParameters, {});
  return [pathParameters, flagParameters, commandLine];
}
