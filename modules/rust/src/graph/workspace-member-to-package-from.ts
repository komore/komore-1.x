import { type CargoPackageWithSource } from '../metadata/cargo-package-with-source';

/**
 * Returns a function that maps a package identifier to a package from a list
 * @param packages List of packages
 * @returns Function that maps a package identifier to a package from the list
 */
export function workspaceMemberToPackageFrom(
  packages: ReadonlyArray<CargoPackageWithSource>
): (packageId: string) => CargoPackageWithSource {
  return packageId => {
    const cargoPackage = packages.find(({ id }) => id === packageId);
    if (cargoPackage === undefined) {
      throw new Error(`package ${packageId} not found in the list of workspace packages`);
    }

    return cargoPackage;
  };
}
