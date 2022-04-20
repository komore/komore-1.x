import { concatMap, filter, fromArray, mapTo, take, throwIfEmpty, type Observable } from '@komore/reactive';
import { isFileAccessible } from '@komore/runtime/node';
import { join } from 'path';
import { PackageManagerNotFoundError } from './package-manager-not-found-error';
import { type PackageManagerType } from './package-manager-type';

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
      new PackageManagerNotFoundError(`no package manager could be detected (looked for: ${lockFilePaths})`);
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
