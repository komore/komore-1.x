import { type GitBranchName } from './git-branch-name';
import { validateGitBranchName } from './validate-git-branch-name';

/**
 * Safely casts a Git branch name string to a Git branch name
 *
 * @param branchName Git branch name string
 * @returns Git branch name
 */
export function asGitBranchName(branchName: string): GitBranchName {
  validateGitBranchName(branchName);
  return branchName;
}
