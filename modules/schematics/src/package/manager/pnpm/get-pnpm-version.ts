import { executeChildProcess } from '@komore/node';
import { map, type Observable } from '@komore/reactive';

/**
 * Creates a function that returns the pnpm version
 *
 * @param basePath Base path
 * @returns Function that returns the pnpm version
 */
export function getPnpmVersion(basePath: string): () => Observable<string> {
  const execute = executeChildProcess('pnpm --version', { cwd: basePath });
  return () => execute.pipe(map(({ stdout }) => stdout.trim()));
}
