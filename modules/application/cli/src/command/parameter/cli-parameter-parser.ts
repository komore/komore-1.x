import { type CliParameterValueTypeNameMapping } from './cli-parameter-type-name-mapping';
import { type CliParameterValueTypeName } from './cli-parameter-value-type-name';

/**
 * CLI parameter parser
 *
 * @template ParameterTypeName Parameter type name
 */
export interface CliParameterParser<ParameterTypeName extends CliParameterValueTypeName> {
  /**
   * Parses a parameter
   *
   * @param parameter Parameter string
   * @returns Parsed parameter
   */
  (parameter: string): CliParameterValueTypeNameMapping[ParameterTypeName];
}
