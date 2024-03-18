import { stringToMatchesWith } from '@komore/string';

import { poetryCliError } from '../poetry-cli.error';

/**
 * Returns the Poetry version, given a Poetry CLI version output
 *
 * @param cliVersion Poetry CLI version output
 * @returns Poetry version
 * @private
 */
export function poetryCliVersionOutputToVersion(): (cliVersion: string) => string {
  type Matches = readonly [matched: string, version: string];
  const toMatches = stringToMatchesWith<Matches>(/\(version\s([^\)]+)\)$/);
  return cliVersion => {
    const matches = toMatches(cliVersion);
    if (matches === undefined) {
      throw poetryCliError.versionParsingFailed({ cliVersion });
    }

    const [, version] = matches;

    return version;
  };
}
