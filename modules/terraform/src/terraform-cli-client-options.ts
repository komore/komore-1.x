/**
 * Terraform CLI client options
 */
export interface TerraformCliClientOptions {
  /**
   * Command name to execute
   *
   * @note Defaults to `terraform`
   */
  readonly commandName?: string;
  /**
   * Working directory
   */
  readonly workingDirectory: string;
}
