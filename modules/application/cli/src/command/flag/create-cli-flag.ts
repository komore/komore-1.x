import { type CliParameterTypeName } from '../parameter/cli-parameter-type-name';
import { type CliFlag } from './cli-flag';

/**
 * Creates a CLI flag
 * @param flag Flag
 * @returns CLI flag
 * @template FlagType Flag type
 */
export function createCliFlag<FlagType extends CliParameterTypeName>(
  flag: CliFlag<FlagType>
): CliFlag<FlagType> {
  return flag;
}
