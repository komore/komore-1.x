import { type PathLike, type RmOptions } from 'fs';
import { rm } from 'fs/promises';

import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Removes a file
 *
 * @param path Path
 * @param options Remove options
 */
export function removeFile(path: PathLike, options?: RmOptions): Observable<void> {
  return deferPromise(() => rm(path, options));
}
