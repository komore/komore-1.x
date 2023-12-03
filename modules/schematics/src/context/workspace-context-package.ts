import { type PackageJson } from '@komore/node/package';
import { type Observable } from '@komore/reactive';

import { type InstalledPackage } from '../package/installed-package';
import { type InstalledPackageWithPackageJson } from '../package/installed-package-with-package-json';
import { type LocalPackage } from '../package/local-package';
import { type LocalPackageWithPackageJson } from '../package/local-package-with-package-json';
import { type PackageManager } from '../package/manager/package-manager';
import { type PackageName } from '../package/name/package-name';

/**
 * Workspace context package information
 */
export interface WorkspaceContextPackage {
  /**
   * Package by name
   */
  readonly byName: ReadonlyMap<PackageName, Observable<InstalledPackage | LocalPackage>>;
  /**
   * Package with package.json by name
   */
  readonly byNameWithPackageJson: ReadonlyMap<
    PackageName,
    Observable<InstalledPackageWithPackageJson | LocalPackageWithPackageJson>
  >;
  /**
   * Workspace package.json
   */
  readonly json: Observable<Partial<PackageJson>>;
  readonly list: {
    /**
     * List of installed packages
     */
    readonly installed: Observable<ReadonlyArray<InstalledPackage>>;
    /**
     * List of installed packages with their package.json file
     */
    readonly installedWithPackageJson: Observable<ReadonlyArray<InstalledPackageWithPackageJson>>;
    /**
     * List of packages
     */
    readonly all: Observable<ReadonlyArray<InstalledPackage | LocalPackage>>;
    /**
     * List of packages with their package.json file
     */
    readonly allWithPackageJson: Observable<
      ReadonlyArray<InstalledPackageWithPackageJson | LocalPackageWithPackageJson>
    >;
    /**
     * List of local packages, i.e. packages discovered via TypeScript aliases
     */
    readonly local: Observable<ReadonlyArray<LocalPackage>>;
    /**
     * List of local packages with their package.json files
     */
    readonly localWithPackageJson: Observable<ReadonlyArray<LocalPackageWithPackageJson>>;
  };
  /**
   * Package manager
   */
  readonly manager: Observable<PackageManager>;
}
