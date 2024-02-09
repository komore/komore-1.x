import { type GitBranchName } from './git-branch-name';

/**
 * Tests whether a value is a valid Git branch name
 *
 * @param value Value
 * @returns true if the value is a valid Git branch name
 */
export function isGitBranchName(value: string): value is GitBranchName {
  // TODO: better test
  return value.length > 0;
}
