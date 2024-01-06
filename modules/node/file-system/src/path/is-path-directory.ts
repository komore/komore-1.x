import { type PathLike } from 'node:fs';

import { map, type Observable } from '@komore/reactive';

import { getPathStatistics } from './get-path-statistics';

/**
 * Creates a function that tests whether a path is a directory
 *
 * @param mode Mode
 * @returns Function that tests whether a path is a directory
 */
export function isPathDirectory(path: PathLike): Observable<boolean> {
  return getPathStatistics(path).pipe(map(stats => stats.isDirectory()));
}
