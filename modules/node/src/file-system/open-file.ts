import { deferPromise, type Observable } from '@komore/reactive';

import { type PathLike } from 'fs';
import { open, type FileHandle } from 'fs/promises';

/**
 * Opens a file
 *
 * @param path File path
 * @param flags Flags used when opening the file; defaults to `'r'` (read)
 * @param mode Mode used when creating the file; defaults to `0666` (readable and writable)
 * @returns File handle
 */
export function openFile(path: PathLike, flags?: string, mode?: number): Observable<FileHandle> {
  return deferPromise(() => open(path, flags ?? 'r', mode));
}
