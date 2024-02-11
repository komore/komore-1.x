import { stringToMatchesWith } from '@komore/string';

import { validateGitCommitHash } from '../commit/hash/validate-git-commit-hash';
import { type GitBranch } from './git-branch';
import { validateGitBranchName } from './name/validate-git-branch-name';

/**
 * Creates a function that returns a Git branch, given a Git CLI branch line
 *
 * @param line Git CLI branch line
 * @returns Git branch
 * @private
 */
export function gitCliBranchLineToGitBranch(): (line: string) => GitBranch {
  type BranchLineMatchArray = readonly [
    matches: string,
    name: string,
    hash: string,
    upstreamBranchName: string | undefined,
    lastCommitMessage: string,
  ];
  const toMatches = stringToMatchesWith<BranchLineMatchArray>(/^\*?\s?([^\s]+)\s+([^\s]+)\s?(\[[^\]]+\])?\s(.+)*$/);
  return line => {
    const matches = toMatches(line);
    if (matches === undefined) {
      throw new Error(`TODO: git branch list line "${line}"`);
    }

    const [, name, hash, upstreamBranchName, lastCommitMessage] = matches;
    const current = line.startsWith('*');
    // TODO: use current?
    current;

    validateGitCommitHash(hash);
    validateGitBranchName(name);
    if (upstreamBranchName !== undefined) {
      validateGitBranchName(upstreamBranchName);
    }

    return {
      hash,
      lastCommitMessage,
      name,
      ...(upstreamBranchName !== undefined ? { upstreamBranchName } : {}),
    };
  };
}
