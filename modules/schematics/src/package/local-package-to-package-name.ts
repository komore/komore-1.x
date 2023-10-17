import { type LocalPackage } from './local-package';
import { type PackageName } from './name/package-name';

/**
 * Returns a local package's name
 *
 * @param localPackage Local package
 * @returns Package name
 */
export function localPackageToPackageName(localPackage: LocalPackage): PackageName {
  return localPackage.name;
}
