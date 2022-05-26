import { throwError, type Observable } from '@komore/reactive';
import { type PackageManager } from '../package-manager';

/**
 * Creates a Yarn package manager
 *
 * @param basePath Base path
 * @returns Yarn package manager
 */
export function createYarnPackageManager(_basePath: string): Observable<PackageManager> {
  return throwError(() => new Error(`Yarn package manager not implemented`));
}
