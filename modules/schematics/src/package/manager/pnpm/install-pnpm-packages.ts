import { executeChildProcess } from '@komore/node/process';
import { redactValue, type Observable } from '@komore/reactive';

/**
 * Creates a function that installs pnpm packages
 *
 * @param basePath Base path
 * @returns Function that installs pnpm packages
 */
export function installPnpmPackages(basePath: string): () => Observable<void> {
  const install = executeChildProcess('pnpm install --frozen', { cwd: basePath });
  return () => install.pipe(redactValue());
}
