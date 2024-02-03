import { ObservableMap, throwUnless } from '@komore/reactive';

import { type InstalledPackageWithPackageJson } from '../package/installed-package-with-package-json';
import { isPackageWithSchematics } from '../package/is-package-with-schematics';
import { type LocalPackageWithPackageJson } from '../package/local-package-with-package-json';
import { type PackageName } from '../package/name/package-name';
import { type PackageWithPackageJsonAndSchematics } from '../package/package-with-package-json-and-schematics';
import { schematicsError } from '../schematics.error';

export function packageNameToPackageWithSchematics(
  byNameWithPackageJson: ObservableMap<PackageName, InstalledPackageWithPackageJson | LocalPackageWithPackageJson>
): (packageName: PackageName) => Observable<PackageWithPackageJsonAndSchematics> {
  return packageName =>
    byNameWithPackageJson
      .get(packageName)
      .pipe(throwUnless(isPackageWithSchematics, () => schematicsError.packageWithoutSchematics({ packageName })));
}
