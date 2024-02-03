import { type PathLike } from 'node:fs';
import { access } from 'node:fs/promises';

import { deferPromise, mapErrorTo, mapTo } from '@komore/reactive';

/**
 * Creates a function that tests whether a path is accessible
 *
 * @param mode Mode
 * @returns Function that tests whether a path is accessible
 */
export function isPathAccessible(mode?: number): (path: PathLike) => Observable<boolean> {
  return path => deferPromise(() => access(path, mode)).pipe(mapTo(true), mapErrorTo(false));
}
