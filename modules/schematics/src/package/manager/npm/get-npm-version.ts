import { executeChildProcess } from '@komore/node/process';
import { map } from '@komore/reactive';

/**
 * Returns the npm version
 *
 * @param basePath Base path
 * @returns npm version
 */
export function getNpmVersion(basePath: string): Observable<string> {
  return executeChildProcess('npm --version', {
    cwd: basePath,
  }).pipe(map(({ stdout }) => stdout.trim()));
}
