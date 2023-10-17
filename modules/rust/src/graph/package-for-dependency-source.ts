import { type CargoPackageWithSource } from '../metadata/cargo-package-with-source';

/**
 * Returns a function that tests whether a package matches a dependency source
 * @param dependencySource Dependency source
 * @returns Function that tests whether a package matches the dependency source
 */
export function packageForDependencySource(
  dependencySource: string
): (cargoPackage: CargoPackageWithSource) => boolean {
  return ({ source }) => source.startsWith(dependencySource);
}
