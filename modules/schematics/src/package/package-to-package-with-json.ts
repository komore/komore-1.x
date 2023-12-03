import { readPackageJson, type PackageJson } from '@komore/node/package'; // TODO: @komore/npm/package?
import { defer, map, type Observable } from '@komore/reactive';

import { type LocalPackage } from './local-package';

/**
 * Returns a package's package.json content
 *
 * @param pkg Package
 * @returns Package with package.json content
 */
export function packageToPackageWithJson<T extends LocalPackage>(
  pkg: T
): Observable<T & { readonly packageJson: Partial<PackageJson> }> {
  return defer(() => {
    return readPackageJson(pkg.packageJsonPath).pipe(
      map(packageJson => ({
        ...pkg,
        packageJson,
      }))
    );
  });
}
