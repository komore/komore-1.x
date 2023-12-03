/**
 * Package module executor options schema
 * TODO: generate from schema json
 */
export interface PackageModuleExecutorOptionsSchema {
  readonly buildTaskName?: string;
  readonly outputPath?: string;
  readonly packageJson?: string;
  readonly workspacePackageJson?: string;
}
