import { type PackageName } from './name/package-name';

/**
 * Local package
 */
export interface LocalPackage {
  /**
   * Package name
   */
  readonly name: PackageName;
  /**
   * Package path
   */
  readonly path: string;
}
