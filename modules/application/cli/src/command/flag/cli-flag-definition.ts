//import { type CliParameterDefault } from '../parameter/cli-parameter-default';
import { type CliParameterTypeName } from '../parameter/cli-parameter-type-name';
//import { type CliParameterTypeNameMapping } from '../parameter/cli-parameter-type-name-mapping';

/**
 * CLI flag definition
 *
 * @template TypeName Flag type
 * @template Required Whether the flag is required
 */
export interface CliFlagDefinition<TypeName extends CliParameterTypeName, Required extends boolean> {
  /**
   * Default value
   */
  //readonly defaultValue?: CliParameterDefault<CliParameterTypeNameMapping<TypeName>>;
  /**
   * Description
   */
  readonly description: string;
  /**
   * Whether the flag is required (default: false)
   */
  readonly required: Required;
  /**
   * Type
   */
  readonly type: TypeName;
}
