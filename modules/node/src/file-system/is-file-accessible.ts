import { deferPromise, mapErrorTo, mapTo, type Observable } from '@komore/reactive';

import { type PathLike } from 'fs';
import { access } from 'fs/promises';

/**
 * Creates a function that tests whether a file is accessible
 *
 * @param mode Mode
 * @returns Function that tests whether a file is accessible
 */
export function isFileAccessible(mode?: number): (path: PathLike) => Observable<boolean> {
  return path => deferPromise(() => access(path, mode)).pipe(mapTo(true), mapErrorTo(false));
}
