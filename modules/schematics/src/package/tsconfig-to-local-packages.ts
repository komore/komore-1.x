import { isDefined, objectToEntries } from '@komore/functional';
import { defaultIfEmpty, forkJoin, map, of, type Observable } from '@komore/reactive';
import { isFileAccessible } from '@komore/runtime/node';
import { dirname, join, relative } from 'path';
import { type TsConfigJson } from '../typescript/tsconfig-json';
import { type LocalPackage } from './local-package';

export function tsConfigToLocalPackages(
  basePath: string
): (tsConfig: TsConfigJson) => Observable<ReadonlyArray<LocalPackage>> {
  return ({ compilerOptions }) => {
    const paths = compilerOptions?.paths;
    if (paths === undefined) {
      return of([]);
    }
    return forkJoin(objectToEntries(paths).map(pathAliasToLocalPackage(basePath))).pipe(
      map(localPackages => localPackages.filter(isDefined)),
      defaultIfEmpty([])
    ); // TODO: test whether there is a file 0
  };
}

function pathAliasToLocalPackage(
  basePath: string
): (entry: readonly [string, ReadonlyArray<string>]) => Observable<LocalPackage | undefined> {
  return ([name, files]) => {
    const filePath = files[0];
    if (filePath === undefined) {
      return of(undefined);
    }

    // TODO: this is cheating, should look for the package.json via the workspace projects
    const fileFullPath = join(basePath, filePath);
    const directoryPath = dirname(fileFullPath);
    const fullPath = join(directoryPath, '..');
    const packageJsonPath = join(fullPath, 'package.json');
    const path = relative(basePath, fullPath);

    return isFileAccessible(packageJsonPath).pipe(
      map(accessible =>
        accessible
          ? {
              name,
              path,
            }
          : undefined
      )
    );
  };
}
