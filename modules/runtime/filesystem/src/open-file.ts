import type { Observable } from '@komore/reactive';
import { deferPromise } from '@komore/reactive/promise';
import type { PathLike } from 'fs';
import type { FileHandle } from 'fs/promises';
import { open } from 'fs/promises';

/**
 * Opens a file
 * @param path File path
 * @param flags Flags used when opening the file; defaults to `'r'` (read)
 * @param mode Mode used when creating the file; defaults to `0666` (readable and writable)
 * @returns File handle
 * @see {@link https://nodejs.org/api/fs.html#fs_file_system_flags File system flags}
 */
export function openFile(path: PathLike, flags: string, mode?: number): Observable<FileHandle> {
  return deferPromise(() => open(path, flags, mode));
}
