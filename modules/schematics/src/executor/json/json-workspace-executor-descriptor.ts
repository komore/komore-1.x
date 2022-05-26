import { type PackageReferenceName } from '../../package/package-reference-name';

/**
 * JSON workspace executor descriptor
 */
export interface JsonWorkspaceExecutorDescriptor {
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
