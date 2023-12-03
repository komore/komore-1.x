import { type PackageJson } from '@komore/runtime/node';

/**
 * Package module executor options
 */
export interface PackageModuleExecutorOptions {
  /**
   * Entry-point
   */
  readonly entryPoint: string;
  /**
   * Output path
   */
  readonly outputPath: string;
  /**
   * Path to the package.json file
   */
  readonly packageJsonPath: string;
  /**
   * package.json for the workspace
   */
  readonly workspacePackageJson: Partial<PackageJson>;
}
