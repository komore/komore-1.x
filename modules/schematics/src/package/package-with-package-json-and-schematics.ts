import { type LocalPackage } from './local-package';
import { type PackageJsonWithSchematics } from './package-json-with-schematics';
import { type PackageWithPackageJson } from './package-with-package-json';

/**
 * Package with a package.json that includes schematics
 */
export interface PackageWithPackageJsonAndSchematics extends LocalPackage, PackageWithPackageJson {
  /**
   * package.json with schematics
   */
  readonly packageJson: PackageJsonWithSchematics;
}
