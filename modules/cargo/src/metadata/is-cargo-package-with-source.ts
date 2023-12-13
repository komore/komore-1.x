import { type CargoPackage } from '../metadata/cargo-package';
import { type CargoPackageWithSource } from './cargo-package-with-source';

/**
 * Tests whether a package has a source defined
 *
 * @param cargoPackage Cargo package
 * @returns true if the package has a source defined
 */
export function isCargoPackageWithSource(cargoPackage: CargoPackage): cargoPackage is CargoPackageWithSource {
  return cargoPackage.source !== null;
}
