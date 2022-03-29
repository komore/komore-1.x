import { type args } from '@oclif/parser';
import { type CliParameterTypeName } from '../parameter/cli-parameter-type-name';
import { getCliParameterParser } from '../parameter/get-cli-parser';
import { type CliArgument } from './cli-argument';

/**
 * Builds OCLIF arguments from a list of CLI command arguments
 * @param cliArguments CLI command arguments
 * @returns OCLIF arguments
 */
export function buildOclifArguments(
  cliArguments?: ReadonlyArray<CliArgument<string, CliParameterTypeName>>
): args.Input | undefined {
  if (cliArguments === undefined) {
    return undefined;
  }

  return cliArguments.map(toOclifArg);
}

function toOclifArg(cliArgument: CliArgument<string, CliParameterTypeName>): args.IArg<unknown> {
  const { defaultValue, description, name, required, type } = cliArgument;

  return {
    default: defaultValue,
    description,
    name,
    parse: getCliParameterParser(type),
    required,
  };
}
