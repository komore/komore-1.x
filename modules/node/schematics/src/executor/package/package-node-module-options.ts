import { type PackageJson } from '@komore/node/package';
import { type WorkspaceExecutorTaskId } from '@komore/schematics';

/**
 * Package Node module options
 */
export interface PackageNodeModuleOptions {
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
   * Task identifier
   */
  readonly taskId: WorkspaceExecutorTaskId;
  /**
   * Workspace package.json
   */
  readonly workspacePackageJson: Partial<PackageJson>;
}
