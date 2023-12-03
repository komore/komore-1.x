/**
 * Build module executor options schema
 * TODO: generate from schema json
 */
export interface BuildModuleExecutorOptionsSchema {
  readonly entryPoint: string;
  readonly outputPath: string;
  readonly sourceMap: boolean;
  readonly tsConfig: string;
  readonly watch: boolean;
}
