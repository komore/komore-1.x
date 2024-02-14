import { executeChildProcess } from '@komore/node/process';
import { map } from '@komore/reactive';

/**
 * Returns the yarn version
 *
 * @param basePath Base path
 * @returns yarn version
 */
export function getYarnVersion(basePath: string): Observable<string> {
  return executeChildProcess('yarn --version', {
    workingDirectory: basePath,
  }).pipe(map(({ stdout }) => stdout.trim()));
}
