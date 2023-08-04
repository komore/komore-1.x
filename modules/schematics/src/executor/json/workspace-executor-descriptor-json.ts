import { type PackageReferenceName } from '../../package/reference/package-reference-name';

/**
 * Workspace executor descriptor JSON
 */
export interface WorkspaceExecutorDescriptorJson {
  /**
   * Default task factory
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
  readonly factory?: PackageReferenceName;
  /**
   * Options
   */
  readonly options?: {
    /**
     * Options processor
     */
    readonly processor?: PackageReferenceName;
    /**
     * Options schema
     */
    readonly schema?: PackageReferenceName;
  };
}
