import { type PackageJsonWithSchematics } from './package-json-with-schematics';
import { type PackageWithPackageJson } from './package-with-package-json';

/**
 * Tests whether a package's a package.json includes schematics information
 *
 * @param packageWithPackageJson Package with package.json
 * @returns true if the package.json includes schematics information
 */
export function isPackageWithSchematics<T extends PackageWithPackageJson>(
  packageWithPackageJson: T
): packageWithPackageJson is T & { readonly packageJson: PackageJsonWithSchematics } {
  const potentialPackageJsonWithSchematics = packageWithPackageJson.packageJson as Partial<PackageJsonWithSchematics>;
  return potentialPackageJsonWithSchematics.komore !== undefined;
}
