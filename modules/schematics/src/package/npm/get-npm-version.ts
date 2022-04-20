import { map, type Observable } from '@komore/reactive';
import { executeChildProcess } from '@komore/runtime/node';

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
