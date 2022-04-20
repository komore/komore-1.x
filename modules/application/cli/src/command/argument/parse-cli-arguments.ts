import { type CliParameterTypeName } from '../parameter/cli-parameter-type-name';
import { type CliParameterValueTypeName } from '../parameter/cli-parameter-value-type-name';
import { getCliParameterParser } from '../parameter/get-cli-parameter-parser';
import { type CliArgumentDefinition } from './cli-argument-definition';
import { type CliArgumentsFromDefinitions } from './cli-arguments-from-definitions';

export function parseCliArguments<
  ArgumentDefinitions extends ReadonlyArray<CliArgumentDefinition<string, CliParameterTypeName, boolean>>
>(
  parameters: ReadonlyArray<string>,
  argumentDefinitions: ArgumentDefinitions | undefined
): CliArgumentsFromDefinitions<ArgumentDefinitions> {
  // TODO: validate more
  return (argumentDefinitions ?? []).map(({ name, type, required }, index) => {
    const parameter = parameters[index];
    // TODO: check default value
    if (parameter === undefined) {
      if (required) {
        throw new Error(`oopsie invalid arg ${name}`);
      }

      return undefined;
    }

    const parser = getCliParameterParser(type as CliParameterValueTypeName); // TODO: deal with array/set
    return parser(parameter);
  }) as unknown as CliArgumentsFromDefinitions<ArgumentDefinitions>;
}
