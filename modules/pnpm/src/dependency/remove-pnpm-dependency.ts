import { redactValue } from '@komore/reactive';

import { type PnpmCliClient } from '../pnpm-cli-client';
import { type RemovePnpmDependencyParameters } from './remove-pnpm-dependency-parameters';

/**
 * Creates a function that removes a pnpm dependency
 *
 * @param cliClient pnpm command-line interface client
 * @returns Function that removes a pnpm dependency
 * @see {@link https://pnpm.io/cli/remove pnpm remove}
 */
export function removePnpmDependency(
  cliClient: PnpmCliClient
): (parameters: RemovePnpmDependencyParameters) => Observable<void> {
  return ({ dependencyName }) => cliClient(['remove', dependencyName]).pipe(redactValue());
}
