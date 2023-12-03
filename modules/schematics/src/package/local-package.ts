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
   * package.json file path
   */
  readonly packageJsonPath: string;
  /**
   * Package path
   */
  readonly path: string;
}
