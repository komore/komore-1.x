import { type PackageJson } from '@komore/runtime/node';

/**
 * Package module options
 */
export interface PackageModuleOptions {
  /**
   * Paths
   */
  readonly paths: {
    /**
     * Path where the output should be written
     */
    readonly output: string;
    /**
     * package.json path
     */
    readonly packageJson: string;
  };
  /**
   * Workspace package.json
   */
  readonly workspacePackageJson: Partial<PackageJson>;
}
