/**
 * Poetry CLI client options
 */
export interface PoetryCliClientOptions {
  /**
   * Command name
   *
   * @note Defaults to `poetry`
   */
  readonly commandName?: string;
  /**
   * Working directory
   */
  readonly workingDirectory: string;
}
