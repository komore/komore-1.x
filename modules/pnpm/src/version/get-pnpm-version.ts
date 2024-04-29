import { type PnpmCliClient } from '../pnpm-cli-client';

/**
 * Creates a function that returns the pnpm version
 *
 * @param cliClient pnpm command-line interface client
 * @returns Function that returns the pnpm version
 */
export function getPnpmVersion(cliClient: PnpmCliClient): () => Observable<string> {
  return () => cliClient(['--version']);
}
