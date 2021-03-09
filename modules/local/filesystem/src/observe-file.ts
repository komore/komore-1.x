import { Observable } from '@komore/reactive';
import type { PathLike } from 'fs';
import { watch } from 'fs';

/**
 * Observes a file
 * @param filePath File path
 * @returns Observable that emits the file path whenever the file changes
 */
export function observeFile(filePath: PathLike): Observable<PathLike> {
  return new Observable<PathLike>(observer => {
    const fsWatcher = watch(filePath, () => observer.next(filePath));
    return () => fsWatcher.close();
  });
}
