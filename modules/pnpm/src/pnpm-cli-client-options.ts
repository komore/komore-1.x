/**
 * pnpm command-line interface client options
 */
export interface PnpmCliClientOptions {
  /**
   * Command name
   *
   * @default 'pnpm'
   */
  readonly commandName?: string;
  /**
   * Working directory
   */
  readonly workingDirectory: string;
}
