/**
 * Node environment variable definition
 *
 * @template T Variable type
 * @template Optional Whether the variable is optional
 * @private
 */
export interface NodeEnvironmentVariableDefinition<T = string, Optional extends boolean = false> {
  /**
   * Default value
   */
  readonly defaultValue?: T;
  /**
   * Environment variable description
   */
  readonly description: string;
  /**
   * Variable name
   */
  readonly name: string;
  /**
   * Whether the environment variable is optional
   */
  readonly optional?: Optional;
  /**
   * A parser that specializes the environment variable
   */
  readonly parse?: (variableValue: string) => T;
}
