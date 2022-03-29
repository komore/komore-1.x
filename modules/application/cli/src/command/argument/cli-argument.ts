import { type CliParameterDefault } from '../parameter/cli-parameter-default';
import { type CliParameterTypeMapping } from '../parameter/cli-parameter-type-mapping';
import { type CliParameterTypeName } from '../parameter/cli-parameter-type-name';

/**
 * CLI argument
 * @template ArgumentName Argument name
 * @template ArgumentTypeName Argument type name
 */
export interface CliArgument<ArgumentName extends string, ArgumentTypeName extends CliParameterTypeName> {
  /**
   * Default value
   */
  readonly defaultValue?: CliParameterDefault<CliParameterTypeMapping[ArgumentTypeName]>;
  /**
   * Description
   */
  readonly description: string;
  /**
   * Argument name
   */
  readonly name: ArgumentName;
  /**
   * Whether the argument is required
   */
  readonly required?: boolean;
  /**
   * Type
   */
  readonly type: ArgumentTypeName;
}
