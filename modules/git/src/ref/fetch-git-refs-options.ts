/**
 * Fetch Git refs options
 *
 * @see {@link https://git-scm.com/docs/git-fetch git fetch}
 */
export interface FetchGitRefsOptions {
  /**
   * Limit fetching to the specified number of commits from the tip of each remote branch history
   *
   * @see {@link https://git-scm.com/docs/git-fetch#Documentation/git-fetch.txt---depth git fetch --depth}
   */
  readonly depth?: number;
  /**
   * TODO
   *
   * @see {@link https://git-scm.com/docs/git-fetch#Documentation/git-fetch.txt---no-tags git fetch --no-tags}
   */
  readonly noTags?: boolean;
  readonly origin?: string;
  /**
   * Pruning options
   *
   * @see {@link https://git-scm.com/docs/git-fetch#_pruning Pruning}
   */
  readonly prune?: {
    /**
     * Removes any remote-tracking references that no longer exist on the remote
     *
     * @note Defaults to `false`
     * @see {@link https://git-scm.com/docs/git-fetch#Documentation/git-fetch.txt---prune git fetch --prune}
     */
    readonly references?: boolean;
    /**
     * Removes any local tags that no longer exist on the remote
     *
     * @note Defaults to `false`
     * @see {@link https://git-scm.com/docs/git-fetch#Documentation/git-fetch.txt---prune git fetch --prune}
     */
    readonly tags?: boolean;
  };
}
