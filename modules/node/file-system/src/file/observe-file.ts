import { watch, type PathLike } from 'node:fs';

import { Observable } from '@komore/reactive';

/**
 * Observes a file
 *
 * @param filePath File path
 * @returns Observable that emits the file path whenever the file changes
 */
export function observeFile(filePath: PathLike): Observable<PathLike> {
  return new Observable<PathLike>(subscriber => {
    const fsWatcher = watch(filePath, () => subscriber.next(filePath));
    subscriber.add(() => fsWatcher.close());
  });
}
