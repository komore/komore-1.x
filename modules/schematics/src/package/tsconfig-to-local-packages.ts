import { isDefined, objectToEntries } from '@komore/functional';
import { defaultIfEmpty, forkJoin, map, of, type Observable } from '@komore/reactive';
import { readPackageJson } from '@komore/runtime/node';
import { type ReadonlyRecord } from '@komore/typescript';
import { dirname, join, relative } from 'path';
import { type TsConfigJson } from '../typescript/tsconfig-json';
import { type LocalPackage } from './local-package';
import { type PackageName } from './package-name';

export function tsConfigToLocalPackages(
  basePath: string
): (tsConfig: TsConfigJson) => Observable<ReadonlyArray<LocalPackage>> {
  return ({ compilerOptions }) => {
    const paths = compilerOptions?.paths as ReadonlyRecord<PackageName, ReadonlyArray<string>> | undefined;
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
): (entry: readonly [PackageName, ReadonlyArray<string>]) => Observable<LocalPackage | undefined> {
  return ([_name, files]) => {
    const filePath = files[0];
    if (filePath === undefined) {
      return of(undefined);
    }

    // TODO: should look for the package.json via the workspace projects and not the tsconfig alias itself?
    const fileFullPath = join(basePath, filePath);
    const directoryPath = dirname(fileFullPath);
    const fullPath = join(directoryPath, '..');
    const packageJsonPath = join(fullPath, 'package.json');
    const path = relative(basePath, fullPath);

    // TODO: avoid I/O operation?
    return readPackageJson(packageJsonPath).pipe(
      map(packageJson => packageJson.name),
      map(packageJsonName =>
        packageJsonName !== undefined
          ? {
              name: packageJsonName as PackageName,
              path,
            }
          : undefined
      )
    );
  };
}
