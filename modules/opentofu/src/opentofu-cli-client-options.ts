/**
 * OpenTofu CLI client options
 */
export interface OpenTofuCliClientOptions {
  /**
   * Command line
   *
   * @note Defaults to `opentofu`
   */
  readonly commandLine?: string;
  /**
   * Working directory
   */
  readonly workingDirectory: string;
}
