import { type GitCommitHash } from '@komore/git';

/**
 * Change log item
 */
export interface ChangeLogItem {
  /**
   * Hash
   */
  readonly hash: GitCommitHash;
}
