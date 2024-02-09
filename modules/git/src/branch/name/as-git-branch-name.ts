import { type GitBranchName } from './git-branch-name';

/**
 * Safely casts a value to a Git branch name
 *
 * @param value Value
 * @returns true if the value is a valid Git branch name
 */
export function asGitBranchName(value: string): value is GitBranchName {
  // TODO: better test
  return value.length > 0;
}
