/**
 * OpenTofu CLI client
 */
export interface OpenTofuCliClientCommandOptions {
  /**
   * Whether the output should be a stream of logs, rather than a single standard output string
   */
  readonly asLogs: boolean;
}
