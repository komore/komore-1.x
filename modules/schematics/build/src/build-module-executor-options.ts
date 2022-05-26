/**
 * Build module executor options
 * TODO: generate from schema json
 */
export interface BuildModuleExecutorOptions {
  readonly entryPoint: string;
  readonly outputPath: string;
  readonly sourceMap: boolean;
  readonly tsConfig: string;
  readonly watch: boolean;
}
