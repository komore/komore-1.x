import { jsonToObject } from '@komore/functional';
import { map, type Observable } from '@komore/reactive';
import { readFileContent } from '../file-system/read-file-content';
import { type PackageJson } from './package-json';

/**
 * Reads a package.json file
 *
 * @param path File path
 * @returns Package information
 */
export function readPackageJson(path: string): Observable<Partial<PackageJson>> {
  return readFileContent(path, 'utf-8').pipe(map(jsonToObject<PackageJson>()));
}
