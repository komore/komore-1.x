import { executeChildProcess } from '@komore/node';
import { map, type Observable } from '@komore/reactive';

/**
 * Returns the yarn version
 *
 * @param basePath Base path
 * @returns yarn version
 */
export function getYarnVersion(basePath: string): Observable<string> {
  return executeChildProcess('yarn --version', {
    cwd: basePath,
  }).pipe(map(({ stdout }) => stdout.trim()));
}
