import { type PackageName } from '../package/name/package-name';
import { type PackageReferenceName } from '../package/reference/package-reference-name';
import { type ExecutorName } from './name/executor-name';

/**
 * Workspace executor descriptor
 */
export interface WorkspaceExecutorDescriptor {
  /**
   * Default task
   */
  readonly defaultTask?: PackageReferenceName;
  /**
   * Description
   */
  readonly description?: string;
  /**
   * Documentation
   */
  readonly documentation?: string;
  /**
   * Entry-point
   */
  readonly factory: PackageReferenceName;
  /**
   * Executor name
   */
  readonly name: ExecutorName;
  /**
   * Package
   */
  readonly package: {
    /**
     * Package name
     */
    readonly name: PackageName;
    /**
     * Package path
     */
    readonly path: string;
  };
  /**
   * Options
   */
  readonly options: {
    /**
     * Options processor
     */
    readonly processor?: PackageReferenceName;
    /**
     * Parameters schema
     */
    readonly schema?: string;
  };
}
