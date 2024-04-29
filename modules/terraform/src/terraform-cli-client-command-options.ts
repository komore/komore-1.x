/**
 * Terraform CLI client
 */
export interface TerraformCliClientCommandOptions {
  /**
   * Whether the output should be a stream of logs, rather than a single standard output string
   */
  readonly asLogs: boolean;
}
