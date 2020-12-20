import { PathLike, watch } from 'fs';
import { Observable } from 'rxjs';

/**
 * Watches a file
 * @param filePath File path
 * @returns Observable that emits the file path whenever the file changes
 */
export function watchFile(filePath: PathLike): Observable<PathLike> {
  return new Observable<PathLike>(observer => {
    const fsWatcher = watch(filePath, () => observer.next(filePath));
    return () => fsWatcher.close();
  });
}
