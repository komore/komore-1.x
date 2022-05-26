import { throwError, type Observable } from '@komore/reactive';
import { createNpmPackageManager } from './npm/create-npm-package-manager';
import { type PackageManager } from './package-manager';
import { type PackageManagerType } from './package-manager-type';
import { createPnpmPackageManager } from './pnpm/create-pnpm-package-manager';
import { createYarnPackageManager } from './yarn/create-yarn-package-manager';

export function createPackageManager(
  basePath: string,
  packageManagerType: PackageManagerType
): Observable<PackageManager> {
  switch (packageManagerType) {
    case 'npm':
      return createNpmPackageManager(basePath);
    case 'pnpm':
      return createPnpmPackageManager(basePath);
    case 'yarn':
      return createYarnPackageManager(basePath);
    default:
      return throwError(() => new Error(`unsupported package manager type ${packageManagerType}`));
  }
}
