import { stringToMatchesWith } from '@komore/string';
import { gitCliError } from '../git-cli.error';

/**
 * Creates a function that returns the Git version name, given a Git CLI version line
 *
 * @returns Function that returns the Git version name, given a Git CLI version line
 * @private
 */
export function gitCliVersionLineToVersionName(): (versionLine: string) => string {
  type Matches = readonly [matched: string, version: string];
  const toMatches = stringToMatchesWith<Matches>(/^git version (.+)$/);
  return versionLine => {
    const matches = toMatches(versionLine);
    if (matches === undefined) {
      throw gitCliError.unsupportedVersionResult({ versionLine });
    }

    const [, version] = matches;

    return version;
  };
}
