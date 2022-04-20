import { throwError, type Observable } from '@komore/reactive';
import { type PackageManager } from './package-manager';
import { type PackageManagerType } from './package-manager-type';
import { createPnpmPackageManager } from './pnpm/create-pnpm-package-manager';

export function createPackageManager(
  basePath: string,
  packageManagerType: PackageManagerType
): Observable<PackageManager> {
  switch (packageManagerType) {
    case 'pnpm':
      return createPnpmPackageManager(basePath);
    default:
      return throwError(() => new Error(`unsupported package manager type ${packageManagerType}`));
  }
}
