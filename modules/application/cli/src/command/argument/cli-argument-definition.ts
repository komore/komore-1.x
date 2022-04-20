//import { type CliParameterDefault } from '../parameter/cli-parameter-default';
import { type CliParameterTypeName } from '../parameter/cli-parameter-type-name';
//import { type CliParameterTypeNameMapping } from '../parameter/cli-parameter-type-name-mapping';

/**
 * CLI argument definition
 *
 * @template ArgumentName Argument name
 * @template ArgumentTypeName Argument type name
 */
export interface CliArgumentDefinition<ArgumentName extends string, ArgumentTypeName extends CliParameterTypeName, Required extends boolean> {
  /**
   * Default value
   */
  //readonly defaultValue?: CliParameterDefault<CliParameterTypeNameMapping<ArgumentTypeName>>;
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
  readonly required: Required;
  /**
   * Type
   */
  readonly type: ArgumentTypeName;
}
