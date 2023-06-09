import { entriesToObject } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';
import { type CliParameterTypeName } from '../parameter/cli-parameter-type-name';
import { type CliParameterValueTypeName } from '../parameter/cli-parameter-value-type-name';
import { getCliParameterParser } from '../parameter/get-cli-parameter-parser';
import { type CliFlagDefinition } from './cli-flag-definition';
import { type CliFlagsFromDefinitions } from './cli-flags-from-definitions';

/**
 * Parses CLI flags
 *
 * @param parameters Parameters
 * @param flagDefinitions Flag definitions
 * @returns Parsed flags and flags that could not be parsed or with no definition
 */
export function parseCliFlags<Flags extends ReadonlyRecord<string, CliFlagDefinition<CliParameterTypeName, boolean>>>(
  parameters: ReadonlyArray<string>,
  flagDefinitions: Flags | undefined
): CliFlagsFromDefinitions<Flags> {
  const flags = flagDefinitions ?? {};

  const parsedFlagEntries = parameters.reduce(toRawParsedFlags, []).map(toParsedFlag(flags));
  const parsedFlags = entriesToObject(parsedFlagEntries);

  return parsedFlags as unknown as CliFlagsFromDefinitions<Flags>;
}

function toParsedFlag<Flags extends ReadonlyRecord<string, CliFlagDefinition<CliParameterTypeName, boolean>>>(
  flagDefinitions: Flags
): (rawParsedFlag: RawParsedFlag) => readonly [name: string, value: unknown] {
  return ({ name, values }) => {
    const flagDefinition = flagDefinitions[name];
    if (flagDefinition === undefined) {
      throw new Error(`unknown flag ${name}`);
    }

    const typeName = flagDefinition.type;
    const arrayValueTypeName = getArrayValueTypeName(typeName);
    if (arrayValueTypeName !== undefined) {
      const rawFlagValueToParsedFlagValue = getCliParameterParser(arrayValueTypeName);
      const arrayElementValues = values.map(rawFlagValueToParsedFlagValue);
      return [name, arrayElementValues];
    }

    const valueTypeName = typeName as CliParameterValueTypeName;

    if (values.length > 1) {
      throw new Error(`flag ${name} cannot have multiple values`);
    } else if (values.length === 0) {
      if (valueTypeName !== 'boolean') {
        throw new Error(`flag ${name} requires a value`);
      }

      return [name, false];
    }

    const [rawValue] = values as unknown as readonly [rawValue: string];
    const rawFlagValueToParsedFlagValue = getCliParameterParser(valueTypeName);
    const value = rawFlagValueToParsedFlagValue(rawValue);

    return [name, value];
  };
}

function getArrayValueTypeName(typeName: CliParameterTypeName): CliParameterValueTypeName | undefined {
  const matches = typeName.match(/Array<(.+)>/) as
    | readonly [matched: string, valueTypeName: CliParameterValueTypeName]
    | null;
  if (matches === null) {
    return undefined;
  }

  const [, valueTypeName] = matches;

  return valueTypeName;
}

/**
 * Reduces a list of parameters to a list of flags with their values
 *
 * @param flags Flags
 * @param currentToken Current token
 * @returns List of parsed flags including the current token
 */
function toRawParsedFlags(flags: Array<RawParsedFlag>, currentToken: string): Array<RawParsedFlag> {
  if (currentToken.startsWith('--')) {
    flags.push({ name: currentToken.substring(2), values: [] });
  } else {
    flags[flags.length - 1]?.values.push(currentToken);
  }

  return flags;
}

/**
 * Raw parsed flag
 */
interface RawParsedFlag {
  readonly name: string;
  readonly values: Array<string>;
}
