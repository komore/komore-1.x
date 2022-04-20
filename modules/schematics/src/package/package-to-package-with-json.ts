import { defer, map, type Observable } from '@komore/reactive';
import { readPackageJson, type PackageJson } from '@komore/runtime/node';
import { join } from 'path';
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
    const packageJsonPath = join(pkg.path, 'package.json');
    return readPackageJson(packageJsonPath).pipe(
      map(packageJson => ({
        ...pkg,
        packageJson,
      }))
    );
  });
}
