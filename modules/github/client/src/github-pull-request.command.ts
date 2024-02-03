import { commandProperties, createCommandType } from '@komore/command';

import { type GitHubPullRequestId } from '../api/repository/pull-request/github-pull-request-id';
import { type GitHubBranchName } from '../api/repository/branch/name/github-branch-name';
import { type GitHubNamespacedBranchName } from '../api/repository/branch/name/github-namespaced-branch-name';
import { type GitHubRepositoryId } from '../api/repository/github-repository-id';
import { gitHubDomain } from '../github.domain';

/**
 * GitHub command
 */
export const gitHubPullRequestCommand = createCommandType(gitHubDomain, {
  /**
   * Closes a pull request
   *
   * @see `closePullRequest` mutation
   */
  closePullRequest: commandProperties<{
    /**
     * Pull request identifier
     */
    readonly pullRequestId: GitHubPullRequestId;
  }>(),
  /**
   * Creates a pull request
   *
   * @see `createPullRequest` mutation
   */
  createPullRequest: commandProperties<{
    /**
     * Base, where the changes are being pulled into
     */
    readonly base: {
      /**
       * Branch name
       */
      readonly branchName: GitHubBranchName;
      /**
       * Repository identifier
       */
      readonly repositoryId: GitHubRepositoryId;
    };
    /**
     * Pull request contents
     */
    readonly body?: string;
    /**
     * Head, where the changes are being pulled from
     */
    readonly head: {
      /**
       * Branch the changes are coming from
       *
       * @note Use a namespaced branch name such as `username:branch` for cross-repository pull requests
       */
      readonly branchName: GitHubBranchName | GitHubNamespacedBranchName;
      /**
       * Repository identifier
       */
      readonly repositoryId: GitHubRepositoryId;
    };
    /**
     * Pull request options
     */
    readonly options?: {
      /**
       * Whether the pull request is a draft
       *
       * @note Defaults to `false`
       */
      readonly draft?: boolean;
      /**
       * Whether the maintainer can modify the pull request
       *
       * @note Defaults to `true`
       */
      readonly maintainerCanModify?: boolean;
    };
    /**
     * Pull request title
     */
    readonly title: string;
  }>(),
  /**
   * Merges a pull request
   */
  mergePullRequest: commandProperties<unknown>(),
});
