import { type CliParameterDefault } from '../parameter/cli-parameter-default';
import { type CliParameterTypeMapping } from '../parameter/cli-parameter-type-mapping';
import { type CliParameterTypeName } from '../parameter/cli-parameter-type-name';

/**
 * CLI flag
 *
 * @template FlagType Flag type
 */
export interface CliFlag<FlagType extends CliParameterTypeName> {
  /**
   * Default value
   */
  readonly defaultValue?: CliParameterDefault<CliParameterTypeMapping[FlagType]>;
  /**
   * Description
   */
  readonly description: string;
  /**
   * Whether the flag is required (default: false)
   */
  readonly required?: boolean;
  /**
   * Type
   */
  readonly type: FlagType;
}
