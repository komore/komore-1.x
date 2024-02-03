/**
 * GitHub pull request
 */
export interface GitHubPullRequest
  extends GitHubAssignable,
    GitHubClosable,
    GitHubCommandEventHandler,
    GitHubLabelable,
    GitHubLockable,
    GitHubNode,
    GitHubProjectV2Owner,
    GitHubReactable,
    GitHubRepositoryNode,
    GitHubSubscribable,
    GitHubUniformResourceLocatable,
    GitHubUpdatable,
    GitHubUpdatableComment {
  /**
   * Reason that the conversation is locked
   */
  readonly activeLockReason?: GitHubLockReason;
  /**
   * Number of additions
   */
  readonly additions: number;
  /**
   * List of users assigned to the pull request
   */
  readonly assignees?: unknown; // UserConnection
  /**
   * Actor who authored the comment
   */
  readonly author?: GitHubActor;
  readonly author;
  /**
   * Body as Markdown
   */
  readonly body: string;
  /**
   * Body as HTML
   */
  readonly bodyHTML: string;
  /**
   * Body as text
   */
  readonly bodyText: string;
  /**
   * Whether the pull request can be rebased
   */
  readonly canBeRebased: boolean;
  /**
   * Number of changed files
   */
  readonly changedFiles: number;
}
