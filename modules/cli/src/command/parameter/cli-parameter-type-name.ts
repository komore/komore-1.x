import { type CliParameterValueTypeName } from './cli-parameter-value-type-name';

/**
 * CLI parameter type name
 */
export type CliParameterTypeName =
  | CliParameterValueTypeName
  | `array<${CliParameterValueTypeName}>`
  | `set<${CliParameterValueTypeName}>`;
