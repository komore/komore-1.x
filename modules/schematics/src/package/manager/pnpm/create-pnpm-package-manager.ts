import { cache, of, type Observable } from '@komore/reactive';

import { type PackageManager } from '../package-manager';
import { getPnpmVersion } from './get-pnpm-version';
import { listPnpmPackages } from './list-pnpm-packages';
import { removePnpmPackage } from './remove-pnpm-package';
import { addPnpmPackage } from './add-pnpm-package';
import { installPnpmPackages } from './install-pnpm-packages';

/**
 * Creates a pnpm package manager
 *
 * @param basePath Base path
 * @returns Package manager
 */
export function createPnpmPackageManager(basePath: string): Observable<PackageManager> {
  // NOTE: what if the pnpm version gets updated while the process is running?
  const version = getPnpmVersion(basePath)().pipe(cache());
  const install = installPnpmPackages(basePath);
  const addPackage = addPnpmPackage(basePath);
  const removePackage = removePnpmPackage(basePath);
  const listPackages = listPnpmPackages(basePath);
  const packageManager: PackageManager = {
    version,
    install,
    addPackage,
    removePackage,
    listPackages,
  };

  return of(packageManager);
}
