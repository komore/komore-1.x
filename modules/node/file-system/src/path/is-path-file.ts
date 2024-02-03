import { type PathLike } from 'node:fs';

import { map } from '@komore/reactive';

import { getPathStatistics } from './get-path-statistics';

/**
 * Creates a function that tests whether a path is a file
 *
 * @param mode Mode
 * @returns Function that tests whether a path is a file
 */
export function isPathFile(path: PathLike): Observable<boolean> {
  return getPathStatistics(path).pipe(map(stats => stats.isFile()));
}
