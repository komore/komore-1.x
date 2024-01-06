/**
 * Build browser application executor options
 */
export interface BuildBrowserApplicationExecutorOptions {
  /**
   * TypeScript configuration file path
   */
  readonly tsConfig: string;
  /**
   * Whether to use watch mode
   */
  readonly watch: boolean;
}
