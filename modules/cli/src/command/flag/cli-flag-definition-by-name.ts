import { type CliParameterTypeName } from '../parameter/cli-parameter-type-name';
import { type CliFlagDefinition } from './cli-flag-definition';

/**
 * Creates a function that matches a command-line flag with a command-line flag entry
 *
 * @param commandLineFlag
 * @returns Function that matches the command-line flag with a command-line flag entry
 */
export function cliFlagByName(
  commandLineFlag: string
): (cliFlag: readonly [flagName: string, flagDefinition: CliFlagDefinition<CliParameterTypeName, boolean>]) => boolean {
  const name = commandLineFlag.toLocaleLowerCase();
  return ([flagName]) => flagName.toLocaleLowerCase() === name;
}
