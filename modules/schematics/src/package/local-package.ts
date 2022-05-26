import { type PackageName } from './package-name';

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
