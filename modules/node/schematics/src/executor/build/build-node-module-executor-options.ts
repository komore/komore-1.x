/**
 * Build Node module executor options
 */
export interface BuildNodeModuleExecutorOptions {
  /**
   * Module entry point file path
   */
  readonly entryPoint: string;
  /**
   * Output directory path
   */
  readonly outputPath: string;
  /**
   * Whether source maps should be generated
   */
  readonly sourceMap: boolean;
  /**
   * TypeScript configuration file path
   */
  readonly tsConfig: string;
  /**
   * Whether the files should be watched and rebuilt upon change
   */
  readonly watch: boolean;
}
