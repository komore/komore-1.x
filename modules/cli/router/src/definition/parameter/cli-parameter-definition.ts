/**
 * Command-line interface parameter definition
 *
 * @template ParameterType Parameter type
 */
export interface CliParameterDefinition<ParameterType, Optional extends boolean> {
  /**
   * List of available choices
   */
  readonly choices?: ReadonlyArray<ParameterType>;
  /**
   * Default value
   */
  readonly defaultValue?: ParameterType;
  /**
   * Description
   */
  readonly description: string;
  /**
   * Whether the flag is optional
   */
  readonly optional?: Optional;
  /**
   * Function that parses the parameter value
   */
  readonly parse: (parameterValue: string) => ParameterType;
}
