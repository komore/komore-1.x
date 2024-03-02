import { homedir } from 'node:os';

import { deferValue } from '@komore/reactive';

/**
 * Returns the home path
 *
 * @returns Home path
 */
export function getHomePath(): Observable<string> {
  return deferValue(homedir);
}
