import type { PathLike } from 'fs';
import type { FileHandle } from 'fs/promises';
import { open } from 'fs/promises';
import type { Observable } from 'rxjs';
import { defer } from 'rxjs';

/**
 * Opens a file
 * @param path File path
 * @param flags Flags used when opening the file; defaults to `'r'` (read)
 * @param mode Mode used when creating the file; defaults to `0666` (readable and writable)
 * @returns File handle
 * @link https://nodejs.org/api/fs.html#fs_file_system_flags
 */
export function openFile(path: PathLike, flags: string, mode?: number): Observable<FileHandle> {
  return defer(() => open(path, flags, mode));
}
