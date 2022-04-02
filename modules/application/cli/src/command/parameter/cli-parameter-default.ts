import { type CliParameterTypeMapping } from './cli-parameter-type-mapping';

/**
 * CLI parameter default
 *
 * @template ParameterType Parameter type
 */
export type CliParameterDefault<ParameterType extends CliParameterTypeMapping[keyof CliParameterTypeMapping]> =
  | ParameterType
  | (() => ParameterType);
