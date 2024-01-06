/**
 * Document module executor options
 */
export interface DocumentModuleExecutorOptions {
  /**
   * Entry-point
   */
  readonly entryPoint: string;
  /**
   * Output path
   */
  readonly outputPath: string;
  /**
   * package.json path
   */
  readonly packageJson: string;
  /**
   * TypeScript configuration file path
   */
  readonly tsConfig: string;
  /**
   * TypeScript configuration file path for specifications
   */
  readonly tsConfigSpec?: string;
  /**
   * Whether to use watch mode
   */
  readonly watch: boolean;
}
