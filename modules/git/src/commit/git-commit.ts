import { type GitCommitHash } from './hash/git-commit-hash';

/**
 * Git commit
 */
export interface GitCommit {
  /**
   * Hash
   */
  readonly hash: GitCommitHash;
  /**
   * Message
   */
  readonly message: string;
}
