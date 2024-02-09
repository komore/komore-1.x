import { type GitBranchName } from './name/git-branch-name';

/**
 * Move Git branch options
 */
export interface MoveGitBranchOptions {
  /**
   * Forces the rename to happen even if a branch named `newBranchName` already exists
   */
  readonly force?: boolean;
  /**
   * New branch name
   */
  readonly newBranchName: GitBranchName;
  /**
   * Old branch name
   *
   * @note Defaults to the current branch
   */
  readonly oldBranchName?: GitBranchName;
}
