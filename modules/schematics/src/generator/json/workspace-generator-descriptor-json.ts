import { type PackageReferenceName } from '../../package/reference/package-reference-name';

/**
 * Workspace generator descriptor JSON
 */
export interface WorkspaceGeneratorDescriptorJson {
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
