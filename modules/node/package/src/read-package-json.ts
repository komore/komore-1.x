import { type PathLike } from 'fs';

import { jsonToObject } from '@komore/json';
import { readFileContent } from '@komore/node/file-system';
import { map, type Observable } from '@komore/reactive';

import { type PackageJson } from './package-json';

/**
 * Reads a package.json file
 *
 * @param path File path
 * @returns Package information
 */
export function readPackageJson(path: PathLike): Observable<Partial<PackageJson>> {
  return readFileContent(path, 'utf-8').pipe(map(jsonToObject<Partial<PackageJson>>()));
}
