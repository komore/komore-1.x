import { type PackageName } from '../package/package-name';
import { PackageReferenceName } from '../package/package-reference-name';
import { type GeneratorName } from './generator-name';

/**
 * Workspace generator descriptor
 */
export interface WorkspaceGeneratorDescriptor {
  /**
   * Description
   */
  readonly description: string;
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
  readonly parameters: {
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
