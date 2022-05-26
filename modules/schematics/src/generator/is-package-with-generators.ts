import { type Expand } from '@komore/typescript';
import { type PackageJsonWithSchematics } from '../package/package-json-with-schematics';
import { type PackageWithPackageJson } from '../package/package-with-package-json';

/**
 * Tests whether a package's a package.json includes generator schematics information
 *
 * @param packageWithPackageJsonWithSchematics Package with a package.json featuring schematics
 * @returns true if the package.json includes generator schematics information
 */
export function isPackageWithGenerators<
  T extends PackageWithPackageJson & { readonly packageJson: PackageJsonWithSchematics }
>(
  packageWithPackageJsonWithSchematics: T & { readonly packageJson: PackageJsonWithSchematics }
): packageWithPackageJsonWithSchematics is T & {
  readonly packageJson: Expand<PackageJsonWithSchematics & { readonly komore: { readonly generators: string } }>;
} {
  return packageWithPackageJsonWithSchematics.packageJson.komore.generators !== undefined;
}
