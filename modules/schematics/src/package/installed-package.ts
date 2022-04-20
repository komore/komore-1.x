import { type LocalPackage } from './local-package';
import { type PackageDependencyType } from './package-dependency-type';

/**
 * Installed package
 */
export interface InstalledPackage extends LocalPackage {
  /**
   * Package dependency type
   */
  readonly dependencyType: PackageDependencyType;
  /**
   * Version
   */
  readonly version: string;
}
