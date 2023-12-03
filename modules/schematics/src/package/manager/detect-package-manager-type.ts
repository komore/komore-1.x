import { join } from 'path';

import { isFileAccessible } from '@komore/node/file-system';
import { concatMap, filter, first, fromArray, mapTo, throwIfEmpty, type Observable } from '@komore/reactive';

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
  const isAccessible = isFileAccessible();
  return fromArray(packageManagerLockFileFullPaths).pipe(
    concatMap(({ fileName, type }) => isAccessible(fileName).pipe(filter(Boolean), mapTo(type))),
    first(),
    throwIfEmpty(() => {
      const lockFilePaths = packageManagerLockFileTypes.map(({ fileName }) => fileName).join(', ');
      return schematicsError.packageManagerNotFound({ lockFilePaths });
    })
  );
}

// TODO: move this configuration to each manager's implementation
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
