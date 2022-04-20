import { identity } from '@komore/functional';
import { type CliParameterParser } from './cli-parameter-parser';
import { type CliParameterValueTypeName } from './cli-parameter-value-type-name';
import { parseBooleanCliParameter } from './parse-boolean-cli-parameter';
import { parseDateCliParameter } from './parse-date-cli-parameter';
import { parseDateTimeCliParameter } from './parse-date-time-cli-parameter';
import { parseNumberCliParameter } from './parse-number-cli-parameter';
import { parseRegExpCliParameter } from './parse-regexp-cli-parameter';
import { parseTimeCliParameter } from './parse-time-cli-parameter';

/**
 * Gets a CLI parser, given a parameter type name
 *
 * @param type Parameter type
 * @returns CLI parser
 */
export function getCliParameterParser<ParameterTypeName extends CliParameterValueTypeName>(
  type: ParameterTypeName
): CliParameterParser<ParameterTypeName> {
  return parsers[type] as CliParameterParser<ParameterTypeName>;
}

const parsers: {
  readonly [ParameterTypeName in CliParameterValueTypeName]: CliParameterParser<CliParameterValueTypeName>;
} = {
  boolean: parseBooleanCliParameter,
  date: parseDateCliParameter,
  'date-time': parseDateTimeCliParameter,
  number: parseNumberCliParameter,
  regexp: parseRegExpCliParameter,
  string: identity,
  time: parseTimeCliParameter,
};
