import { type FileHandle } from 'node:fs/promises';

import { deferPromise } from '@komore/reactive';

/**
 * Closes a file
 *
 * @param fileHandle File handle
 * @returns Observable that emits once the file is closed
 */
export function closeFile(fileHandle: FileHandle): Observable<void> {
  return deferPromise(() => fileHandle.close());
}
