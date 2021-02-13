import type { FileHandle } from 'fs/promises';
import type { Observable } from 'rxjs';
import { defer } from 'rxjs';

/**
 * Closes a file
 * @param fileHandle File handle
 * @returns Observable that emits once the file is closed
 */
export function closeFile(fileHandle: FileHandle): Observable<void> {
  return defer(() => fileHandle.close());
}
