import { type GitRevision } from './git-revision';

/**
 * Git revision range
 */
export interface GitRevisionRange {
  /**
   * Whether to exclude commits that are reachable from `to`
   */
  readonly excludeTo?: boolean;
  /**
   *
   * @note Defaults to `'HEAD'`
   */
  readonly from?: GitRevision;
  /**
   *
   * @note Defaults to `'HEAD'`
   */
  readonly to?: GitRevision;
}
