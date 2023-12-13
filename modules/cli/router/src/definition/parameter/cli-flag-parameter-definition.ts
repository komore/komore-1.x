import { type CliParameterDefinition } from './cli-parameter-definition';

/**
 * Command-line interface flag parameter definition
 */
export interface CliFlagParameterDefinition<ParameterType, Optional extends boolean>
  extends CliParameterDefinition<ParameterType, Optional> {
  /**
   * Aliases
   */
  readonly aliases?: ReadonlyArray<string>;
}
