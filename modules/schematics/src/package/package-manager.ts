import { type Observable } from '@komore/reactive';
import { type InstalledPackage } from './installed-package';
import { type PackageDependencyType } from './package-dependency-type';

/**
 * Package manager
 */
export interface PackageManager {
  /**
   * Package manager version
   */
  readonly version: Observable<string>;
  /**
   * Installs packages
   *
   * @returns Observable that emits upon completion
   */
  install(): Observable<void>;
  /**
   * Adds a package
   *
   * @param packageName Package name
   * @param packageVersion Package version
   * @param type Package dependency type
   * @returns Observable that emits upon completion
   */
  addPackage(packageName: string, packageVersion: string, type: PackageDependencyType): Observable<void>;
  /**
   * Removes a package
   *
   * @param packageName Package name
   * @returns Observable that emits upon completion
   */
  removePackage(packageName: string): Observable<void>;
  /**
   * Returns the list of installed packages
   *
   * @returns List of installed packages
   * @note Only the explicitly installed packages are returned
   */
  listPackages(): Observable<ReadonlyArray<InstalledPackage>>;
}
