import { type CliParameterTypeName } from '../parameter/cli-parameter-type-name';
import { type CliArgument } from './cli-argument';

/**
 * Creates a CLI argument
 * @param name Argument name
 * @param argument Argument
 * @returns CLI argument
 * @template ArgumentName Argument name
 * @template ArgumentTypeName Argument type name
 */
export function createCliArgument<ArgumentName extends string, ArgumentTypeName extends CliParameterTypeName>(
  name: ArgumentName,
  argument: Omit<CliArgument<ArgumentName, ArgumentTypeName>, 'name'>
): CliArgument<ArgumentName, ArgumentTypeName> {
  return {
    ...argument,
    name,
  };
}
