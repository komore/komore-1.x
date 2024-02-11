import { type GitCommitHash } from './hash/git-commit-hash';

/**
 * Git commit summary
 */
export interface GitCommitSummary {
  /**
   * Hash
   */
  readonly hash: GitCommitHash;
  /**
   * Message
   */
  readonly message: string;
}
