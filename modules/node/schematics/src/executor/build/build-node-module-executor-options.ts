/**
 * Build Node module executor options
 */
export interface BuildNodeModuleExecutorOptions {
  readonly entryPoint: string;
  readonly outputPath: string;
  readonly sourceMap: boolean;
  readonly tsConfig: string;
  readonly watch: boolean;
}
