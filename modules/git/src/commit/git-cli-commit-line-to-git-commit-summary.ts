import { stringToMatchesWith } from '@komore/string';

import { validateGitCommitHash } from './hash/validate-git-commit-hash';
import { type GitCommitSummary } from './git-commit-summary';

/**
 * Creates a function that returns a Git commit summary, given a Git CLI commit line
 *
 * @returns Function that returns a Git commit summary, given a Git CLI commit line
 * @private
 */
export function gitCliCommitLineToGitCommitSummary(): (line: string) => GitCommitSummary {
  type CommitLineMatchArray = readonly [matches: string, hash: string, extraInfo: string | undefined, message: string];
  const toMatches = stringToMatchesWith<CommitLineMatchArray>(/^([^\s]+)\s+(\([^\)]+\))?\s?(.+)*$/);

  return line => {
    const matches = toMatches(line);
    if (matches === undefined) {
      throw new Error(`TODO: git commit list line "${line}"`);
    }

    const [, hash, extraInfo, message] = matches;
    if (extraInfo !== undefined) {
      // TODO: check why this is never provided even though it's available
      //       when running the same command from the cli
      console.log('extrainfo', extraInfo);
    }

    validateGitCommitHash(hash);

    return {
      hash,
      message,
    };
  };
}
