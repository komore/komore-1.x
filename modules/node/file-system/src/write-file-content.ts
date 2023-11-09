import { type PathLike } from 'fs';
import { writeFile } from 'fs/promises';

import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Writes content to a file
 *
 * @param filePath File path
 * @param data Data
 */
export function writeFileContent(filePath: PathLike, data: string | Uint8Array): Observable<void> {
  return deferPromise(() => writeFile(filePath, data));
}
