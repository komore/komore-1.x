import { assert } from '@komore/runtime';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CliFlagParameterDefinition } from '../../definition/parameter/cli-flag-parameter-definition';
import { type CliParameterTypeFromCliParameterDefinition } from '../../definition/parameter/cli-parameter-type-from-cli-parameter-definition';

export function cliFlagParameterEntryToRouteFlagParameterEntry<
  FlagDefinitions extends ReadonlyRecord<string, CliFlagParameterDefinition<unknown, boolean>>,
>(
  flagDefinitions: FlagDefinitions
): <K extends keyof FlagDefinitions & string>(
  entry: readonly [name: string, value: string]
) => readonly [name: K, value: CliParameterTypeFromCliParameterDefinition<FlagDefinitions[K]>] | undefined {
  const isValidFlagName = isFlagNameInFlagDefinitions(flagDefinitions);
  return <K extends keyof FlagDefinitions & string>(entry: readonly [name: string, value: string]) => {
    const [name, value] = entry;
    if (!isValidFlagName<K>(name)) {
      return undefined;
    }

    const flagDefinition = flagDefinitions[name]; // TODO: look for aliases
    assert(flagDefinition !== undefined, 'TODO: can never occur, name being keyof typeof flagDefinitions');
    const { parse } = flagDefinition;
    // TODO: optionals/defaults should be checked
    const parsedValue = parse === Boolean && value === '' ? true : parse(value);
    return [name, parsedValue as CliParameterTypeFromCliParameterDefinition<FlagDefinitions[K]>];
  };
}

function isFlagNameInFlagDefinitions<
  FlagDefinitions extends ReadonlyRecord<string, CliFlagParameterDefinition<unknown, boolean>>,
>(flagDefinitions: FlagDefinitions): <K extends keyof FlagDefinitions & string>(flagName: string) => flagName is K {
  return <K extends keyof FlagDefinitions & string>(flagName: string): flagName is K => flagName in flagDefinitions;
}
