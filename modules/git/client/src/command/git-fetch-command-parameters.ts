/**
 * git fetch command parameters
 *
 * @see {@link https://git-scm.com/docs/git-fetch git fetch}
 */
export interface GitFetchCommandParameters {
  /**
   * Limit fetching to the specified number of commits from the tip of each remote branch history
   *
   * @see {@link https://git-scm.com/docs/git-fetch#Documentation/git-fetch.txt---no-tags git fetch --depth}
   */
  readonly depth?: number;
  /**
   * TODO
   *
   * @see {@link https://git-scm.com/docs/git-fetch#Documentation/git-fetch.txt---no-tags git fetch --no-tags}
   */
  readonly noTags?: boolean;
  readonly origin?: string;
}
