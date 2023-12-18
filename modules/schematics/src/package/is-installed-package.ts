import { type InstalledPackage } from './installed-package';
import { type LocalPackage } from './local-package';

/**
 * Returns true if a local package is an installed package
 *
 * @param localPackage Local package
 * @returns true if the local package is an installed package
 */
export function isInstalledPackage(localPackage: LocalPackage): localPackage is InstalledPackage {
  return 'dependencyType' in localPackage;
}
