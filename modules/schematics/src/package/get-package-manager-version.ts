import { throwError, type Observable } from '@komore/reactive';
import { getNpmVersion } from './npm/get-npm-version';
import { type PackageManagerType } from './package-manager-type';
import { getPnpmVersion } from './pnpm/get-pnpm-version';
import { getYarnVersion } from './yarn/get-yarn-version';

/**
 * Returns a package manager version
 *
 * @param basePath Base path
 * @param type Package manager type
 * @returns Package manager version
 */
export function getPackageManagerVersion(basePath: string, type: PackageManagerType): Observable<string> {
  switch (type) {
    case 'npm':
      return getNpmVersion(basePath);
    case 'pnpm':
      return getPnpmVersion(basePath);
    case 'yarn':
      return getYarnVersion(basePath);
    default:
      return throwError(() => new Error(`unsupported package manager type "${type}"`));
  }
}
