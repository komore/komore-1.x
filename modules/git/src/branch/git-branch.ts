import { type GitBranchName } from './name/git-branch-name';

/**
 * Git branch
 */
export interface GitBranch {
  /**
   * Name
   */
  readonly name: GitBranchName;
}
