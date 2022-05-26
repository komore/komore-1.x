import { map, type Observable } from '@komore/reactive';
import { executeChildProcess } from '@komore/runtime/node';

/**
 * Returns the pnpm version
 *
 * @param basePath Base path
 * @returns pnpm version
 */
export function getPnpmVersion(basePath: string): Observable<string> {
  return executeChildProcess('pnpm --version', {
    cwd: basePath,
  }).pipe(map(({ stdout }) => stdout.trim()));
}
