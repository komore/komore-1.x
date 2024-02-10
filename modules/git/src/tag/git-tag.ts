import { type GitTagName } from './name/git-tag-name';

/**
 * Git tag
 */
export interface GitTag {
  /**
   * Name
   */
  readonly name: GitTagName;
}
