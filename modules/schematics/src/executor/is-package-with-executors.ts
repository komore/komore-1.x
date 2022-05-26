import { type PackageWithPackageJsonAndSchematics } from '../package/package-with-package-json-and-schematics';

/**
 * Tests whether a package's a package.json includes executor schematics information
 *
 * @param packageWithPackageJsonWithSchematics Package with a package.json featuring schematics
 * @returns true if the package.json includes executor schematics information
 */
export function isPackageWithExecutors<T extends PackageWithPackageJsonAndSchematics>(
  packageWithPackageJsonWithSchematics: T
): packageWithPackageJsonWithSchematics is T & {
  readonly packageJson: { readonly komore: { readonly executors: string } };
} {
  return packageWithPackageJsonWithSchematics.packageJson.komore.executors !== undefined;
}
