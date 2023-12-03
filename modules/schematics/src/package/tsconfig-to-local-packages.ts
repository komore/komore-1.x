import { dirname, join, relative } from 'path';

import { isErrorOfType } from '@komore/error';
import { isDefined, objectToEntries } from '@komore/functional';
import { nodeFileSystemError } from '@komore/node/file-system';
import { readPackageJson } from '@komore/node/package';
import { defaultIfEmpty, forkJoin, map, of, throwIfError, type Observable } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

import { type TsConfigJson } from '../typescript/tsconfig-json';
import { type LocalPackage } from './local-package';
import { type PackageName } from './name/package-name';
import { projectNameToPackageJsonFileName } from './project-name-to-package-json-file-name';

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

    const fileFullPath = join(basePath, filePath);
    const directoryPath = dirname(fileFullPath);
    const fullPath = join(directoryPath, '..');
    // TODO: should look for the package.json/project name via the workspace projects and not the tsconfig alias itself
    const projectName = fullPath
      .split('\\')
      .slice(5)
      .map(s => s.replaceAll('-', ''))
      .join('-');
    const packageJsonFileName = projectNameToPackageJsonFileName(projectName);
    const packageJsonPath = join(fullPath, packageJsonFileName);
    const path = relative(basePath, fullPath);

    // TODO: avoid I/O operation since it should already be available in the workspace context?
    // NOTE: but why would it be available unless loaded because of the path here 🤔
    return readPackageJson(packageJsonPath).pipe(
      throwIfError(
        isErrorOfType(nodeFileSystemError.fileNotFound),
        () => new Error(`project ${projectName} has no package.json file (looking for ${packageJsonFileName})`)
      ),
      map(packageJson => packageJson.name),
      map(packageJsonName =>
        packageJsonName !== undefined
          ? {
              name: packageJsonName as PackageName,
              packageJsonPath,
              path,
            }
          : undefined
      )
    );
  };
}
