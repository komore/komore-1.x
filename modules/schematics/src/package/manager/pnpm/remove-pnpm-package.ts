import { executeChildProcess } from '@komore/node/process';
import { redactValue } from '@komore/reactive';

import { type PackageName } from '../../name/package-name';

/**
 * Creates a function that removes a pnpm package
 *
 * @param basePath Base path
 * @returns Function that removes a pnpm package
 */
export function removePnpmPackage(basePath: string): (packageName: PackageName) => Observable<void> {
  const execOptions = { workingDirectory: basePath };
  return packageName => executeChildProcess(`pnpm remove ${packageName}`, execOptions).pipe(redactValue());
}
