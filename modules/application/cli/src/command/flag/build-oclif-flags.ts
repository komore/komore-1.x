import { type ReadonlyRecord } from '@komore/typescript';
import { type CliParameterTypeName } from '../parameter/cli-parameter-type-name';
import { type CliFlag } from './cli-flag';

/**
 * Builds OCLIF flags from a set of CLI command flags
 */
export function buildOclifFlags(_flags?: ReadonlyRecord<string, CliFlag<CliParameterTypeName>>): undefined {
  return undefined;
}
