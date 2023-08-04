import { join } from 'path';

import { isFileAccessible } from '@komore/node';
import { concatMap, filter, fromArray, mapTo, take, throwIfEmpty, type Observable } from '@komore/reactive';

import { type PackageManagerType } from './package-manager-type';
import { schematicsError } from '../../schematics.error';

/**
 * Detects the type of package managed in use
 *
 * @param basePath Base path
 * @returns Detected package manager type
 */
export function detectPackageManagerType(basePath: string): Observable<PackageManagerType> {
  const packageManagerLockFileTypes = getPackageManagerLockFileTypes();
  const packageManagerLockFileFullPaths = packageManagerLockFileTypes.map(lockFileTypeWithFullPath(basePath));
  return fromArray(packageManagerLockFileFullPaths).pipe(
    concatMap(({ fileName, type }) => isFileAccessible(fileName).pipe(filter(Boolean), mapTo(type))),
    take(1),
    throwIfEmpty(() => {
      const lockFilePaths = packageManagerLockFileTypes.map(({ fileName }) => fileName).join(', ');
      return schematicsError('package.manager.not-found', { lockFilePaths });
    })
  );
}

function getPackageManagerLockFileTypes(): ReadonlyArray<PackageManagerLockFileType> {
  return [
    {
      fileName: 'pnpm-lock.yaml',
      type: 'pnpm',
    },
    {
      fileName: 'yarn.lock',
      type: 'yarn',
    },
    {
      fileName: 'package-lock.json',
      type: 'npm',
    },
  ];
}

function lockFileTypeWithFullPath(
  basePath: string
): (packageManagerLockFileType: PackageManagerLockFileType) => PackageManagerLockFileType {
  return packageManagerLockFileType => ({
    ...packageManagerLockFileType,
    fileName: join(basePath, packageManagerLockFileType.fileName),
  });
}

interface PackageManagerLockFileType {
  readonly fileName: string;
  readonly type: PackageManagerType;
}
