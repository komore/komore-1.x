import { type GitBranchName } from './name/git-branch-name';

/**
 * Git branch
 */
export interface GitBranch {
  /**
   * Last commit message
   */
  readonly lastCommitMessage: string;
  /**
   * Name
   */
  readonly name: GitBranchName;
  /**
   * Upstream branch name
   */
  readonly upstreamBranchName?: GitBranchName;
}
