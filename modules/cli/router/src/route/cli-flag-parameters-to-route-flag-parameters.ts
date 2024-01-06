import { entriesToObject, isDefined, objectToEntries } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CliFlagParameterDefinition } from '../definition/parameter/cli-flag-parameter-definition';
import { type CliParametersTypeFromCliParameterDefinitions } from '../definition/parameter/cli-parameters-type-from-cli-parameter-definitions';
import { cliFlagParameterEntryToRouteFlagParameterEntry } from './cli-flag-parameter-entry-to-route-flag-parameter-entry';

export function cliFlagParametersToRouteFlagParameters<
  FlagDefinitions extends ReadonlyRecord<string, CliFlagParameterDefinition<unknown, boolean>>,
>(
  flagDefinitions: FlagDefinitions
): (
  cliFlagParameters: ReadonlyRecord<string, string>
) => CliParametersTypeFromCliParameterDefinitions<FlagDefinitions> {
  const toRouteFlagParameters = cliFlagParameterEntryToRouteFlagParameterEntry(flagDefinitions);
  return cliFlagParameters => {
    const cliFlagParameterEntries = objectToEntries(cliFlagParameters);
    const flagParameterEntries = cliFlagParameterEntries.map(toRouteFlagParameters).filter(isDefined);
    return entriesToObject(flagParameterEntries) as CliParametersTypeFromCliParameterDefinitions<FlagDefinitions>;
  };
}
