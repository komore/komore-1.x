import { deferPromise, mapErrorTo, mapTo, type Observable } from '@komore/reactive';
import { access } from 'fs/promises';

export function isFileAccessible(path: string, mode?: number): Observable<boolean> {
  return deferPromise(() => access(path, mode)).pipe(mapTo(true), mapErrorTo(false));
}
