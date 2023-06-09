import { type CliParameterTypeName } from '../parameter/cli-parameter-type-name';
import { type CliArgumentDefinition } from './cli-argument-definition';

/**
 * Creates a CLI argument
 *
 * @param name Argument name
 * @param argument Argument
 * @returns CLI argument
 * @template ArgumentName Argument name
 * @template ArgumentTypeName Argument type name
 */
export function createCliArgument<
  ArgumentName extends string,
  ArgumentTypeName extends CliParameterTypeName,
  Required extends boolean = false
>(
  name: ArgumentName,
  argument: Omit<CliArgumentDefinition<ArgumentName, ArgumentTypeName, Required>, 'name' | 'required'> & {
    readonly required?: Required;
  }
): CliArgumentDefinition<ArgumentName, ArgumentTypeName, Required> {
  return {
    ...argument,
    name,
    required: argument.required ?? (false as Required),
  };
}
