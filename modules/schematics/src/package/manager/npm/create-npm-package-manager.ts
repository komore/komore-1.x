import { throwError, type Observable } from '@komore/reactive';

import { type PackageManager } from '../package-manager';

/**
 * Creates an npm package manager
 *
 * @param basePath Base path
 * @returns npm package manager
 */
export function createNpmPackageManager(_basePath: string): Observable<PackageManager> {
  return throwError(() => new Error(`npm package manager not implemented`));
}
