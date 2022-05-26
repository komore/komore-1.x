import { type Observable } from '@komore/reactive';
import { type InstalledPackage } from '../installed-package';
import { type PackageManager } from './package-manager';

/**
 * Returns the list of installed packages, given a package manager
 *
 * @param packageManager Package manager
 * @returns List of installed packages
 */
export function packageManagerToPackageList(
  packageManager: PackageManager
): Observable<ReadonlyArray<InstalledPackage>> {
  return packageManager.listPackages();
}
