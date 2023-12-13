import { type CliParameterDefinition } from './cli-parameter-definition';

/**
 * Command-line interface parameter type from a command-line interface parameter definition
 */
export type CliParameterTypeFromCliParameterDefinition<
  ParameterDefinition extends CliParameterDefinition<unknown, boolean>,
> = ParameterDefinition['optional'] extends true
  ? ParameterTypeFromParameterDefinition<ParameterDefinition> | undefined
  : ParameterTypeFromParameterDefinition<ParameterDefinition>;

type ParameterTypeFromParameterDefinition<ParameterDefinition extends CliParameterDefinition<unknown, boolean>> =
  ParameterDefinition extends CliParameterDefinition<infer T, boolean> ? T : never;
