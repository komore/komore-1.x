import { type FileHandle } from 'fs/promises';

import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Closes a file
 *
 * @param fileHandle File handle
 * @returns Observable that emits once the file is closed
 */
export function closeFile(fileHandle: FileHandle): Observable<void> {
  return deferPromise(() => fileHandle.close());
}
