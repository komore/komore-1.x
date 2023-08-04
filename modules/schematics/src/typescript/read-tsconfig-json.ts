import { jsonToObject } from '@komore/json';
import { readFileContent } from '@komore/node';
import { map, type Observable } from '@komore/reactive';

import { type TsConfigJson } from './tsconfig-json';

/**
 * Reads a tsconfig.json file
 *
 * @param filePath File path
 * @returns tsconfig.json source file
 */
export function readTsConfigJson(filePath: string): Observable<TsConfigJson> {
  return readFileContent(filePath, 'utf-8').pipe(map(jsonToObject<TsConfigJson>()));
}
