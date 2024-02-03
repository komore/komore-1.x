import { type PathLike } from 'node:fs';
import { writeFile } from 'node:fs/promises';

import { deferPromise } from '@komore/reactive';

import { type WriteFileContentOptions } from './write-file-content-options';

/**
 * Writes content to a file
 *
 * @param filePath File path
 * @param data Data
 * @param options Options
 */
export function writeFileContent(
  filePath: PathLike,
  data: string | Uint8Array,
  options?: WriteFileContentOptions
): Observable<void> {
  const encoding = options?.encoding ?? null;
  return deferPromise(() => writeFile(filePath, data, { encoding }));
}
