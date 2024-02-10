import { type GitBranch } from './git-branch';
import { validateGitBranchName } from './name/validate-git-branch-name';

/**
 * Returns a Git branch, given a Git CLI branch line
 *
 * @param line Git CLI branch line
 * @returns Git branch
 */
export function gitCliBranchLineToBranch(line: string): GitBranch {
  type BranchLineMatchArray = readonly [
    matches: string,
    name: string,
    hash: string,
    upstreamBranchName: string | undefined,
    lastCommitMessage: string,
  ];
  const matches = line.match(/^\*?\s?([^\s]+)\s+([^\s]+)\s?(\[[^\]]+\])?\s(.+)*$/) as BranchLineMatchArray | null;
  if (matches === null) {
    throw new Error(`TODO: git branch list line "${line}"`);
  }

  const [, name, hash, upstreamBranchName, lastCommitMessage] = matches;
  const current = line.startsWith('*');

  validateGitBranchName(name);
  if (upstreamBranchName !== undefined) {
    validateGitBranchName(upstreamBranchName);
  }

  return {
    lastCommitMessage,
    name,
    ...(upstreamBranchName !== undefined ? { upstreamBranchName } : {}),
  };
}
