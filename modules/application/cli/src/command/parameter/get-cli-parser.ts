import { type ParseFn } from '@oclif/parser/lib/args';
import { type CliParameterTypeMapping } from '../parameter/cli-parameter-type-mapping';
import { type CliParameterTypeName } from '../parameter/cli-parameter-type-name';
import { parseBooleanCliParameter } from './parse-boolean-cli-parameter';
import { parseDateCliParameter } from './parse-date-cli-parameter';
import { parseDateTimeCliParameter } from './parse-date-time-cli-parameter';
import { parseNumberCliParameter } from './parse-number-cli-parameter';
import { parseTimeCliParameter } from './parse-time-cli-parameter';

/**
 * Gets a CLI parser, given a parameter type name
 * @param type Parameter type
 * @returns CLI parser
 */
export function getCliParameterParser<ParameterTypeName extends CliParameterTypeName>(
  type: ParameterTypeName
): ParseFn<CliParameterTypeMapping[ParameterTypeName]> | undefined {
  return parsers.get(type) as ParseFn<CliParameterTypeMapping[ParameterTypeName]> | undefined;
}

const parsers = new Map<CliParameterTypeName, ParseFn<CliParameterTypeMapping[CliParameterTypeName]>>([
  ['boolean', parseBooleanCliParameter],
  ['number', parseNumberCliParameter],
  ['date-time', parseDateTimeCliParameter],
  ['date', parseDateCliParameter],
  ['time', parseTimeCliParameter],
]);
