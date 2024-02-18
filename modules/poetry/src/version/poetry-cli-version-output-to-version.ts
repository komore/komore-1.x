import { poetryCliError } from '../poetry-cli.error';

/**
 * Returns the Poetry version, given a Poetry CLI version output
 *
 * @param cliVersion Poetry CLI version output
 * @returns Poetry version
 * @private
 */
export function poetryCliVersionOutputToVersion(cliVersion: string): string {
  type Matches = readonly [matches: string, version: string] | null;
  const matches = cliVersion.match(/\(version\s([^\)]+)\)$/) as Matches;
  if (matches === null) {
    throw poetryCliError.versionParsingFailed({ cliVersion });
  }

  const [, version] = matches;

  return version;
}
