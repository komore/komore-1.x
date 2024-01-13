import { type GitHubBranchId } from './github-branch-id';
import { type GitHubBranchName } from './name/github-branch-name';

/**
 * GitHub branch
 */
export interface GitHubBranch {
  /**
   * Branch identifier
   */
  readonly id: GitHubBranchId;
  /**
   * Branch name
   */
  readonly name: GitHubBranchName;
}
