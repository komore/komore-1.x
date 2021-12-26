import { deferPromise, type Observable } from '@komore/reactive';
import { type FileHandle } from 'fs/promises';

/**
 * Closes a file
 * @param fileHandle File handle
 * @returns Observable that emits once the file is closed
 */
export function closeFile(fileHandle: FileHandle): Observable<void> {
  return deferPromise(() => fileHandle.close());
}
