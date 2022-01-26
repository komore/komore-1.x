import { deferPromise, type Observable } from '@komore/reactive';
import { type PathLike, type RmOptions } from 'fs';
import { rm } from 'fs/promises';

/**
 * Removes a file
 * @param path Path
 */
export function removeFile(path: PathLike, options?: RmOptions): Observable<void> {
  return deferPromise(() => rm(path, options));
}
