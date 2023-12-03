import { type PackageName } from '../package/name/package-name';
import { type PackageReferenceName } from '../package/reference/package-reference-name';
import { type GeneratorName } from './name/generator-name';

/**
 * Workspace generator descriptor
 */
export interface WorkspaceGeneratorDescriptor {
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
   * Name
   */
  readonly name: GeneratorName;
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
   * Parameters options
   */
  readonly options: {
    /**
     * Defaults factory
     */
    readonly defaults?: PackageReferenceName;
    /**
     * Parameters processor
     */
    readonly processor?: PackageReferenceName;
  };
}
