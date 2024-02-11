import { type GitCommitHash } from '../commit/hash/git-commit-hash';
import { type GitBranchName } from './name/git-branch-name';

/**
 * Git branch
 */
export interface GitBranch {
  /**
   * Commit hash
   */
  readonly hash: GitCommitHash;
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
