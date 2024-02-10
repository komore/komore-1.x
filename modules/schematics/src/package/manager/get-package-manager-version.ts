import { type ReadonlyRecord } from '@komore/typescript';

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
  const versionByPackageManagerType: ReadonlyRecord<PackageManagerType, () => () => Observable<string>> = {
    npm: () => () => getNpmVersion(basePath),
    pnpm: () => getPnpmVersion(basePath),
    yarn: () => () => getYarnVersion(basePath),
  };
  return versionByPackageManagerType[type]()();
}
