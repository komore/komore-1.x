import { type PathLike, type RmOptions } from 'node:fs';
import { rm } from 'node:fs/promises';

import { deferPromise } from '@komore/reactive';

/**
 * Removes a file
 *
 * @param path Path
 * @param options Remove options
 */
export function removeFile(path: PathLike, options?: RmOptions): Observable<void> {
  return deferPromise(() => rm(path, options));
}
