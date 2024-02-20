/**
 * OpenTofu CLI client options
 */
export interface OpenTofuCliClientOptions {
  /**
   * Command name to execute
   *
   * @note Defaults to `tofu`
   */
  readonly commandName?: string;
  /**
   * Working directory
   */
  readonly workingDirectory: string;
}
