import { type CliParameterDefinition } from './cli-parameter-definition';

/**
 * Command-line interface path parameter definition
 */
export interface CliPathParameterDefinition<ParameterType, Optional extends boolean>
  extends CliParameterDefinition<ParameterType, Optional> {}
