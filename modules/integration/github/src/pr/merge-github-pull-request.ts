import { deferPromise, map, type Observable } from '@komore/reactive';
import { type GithubClient } from '../github-client';
import { githubResponseToData } from '../github-response-to-data';
import { type GithubPullRequestMergeOptions } from './github-pull-request-merge-options';
import { type GithubPullRequestMergeResult } from './github-pull-request-merge-result';

/**
 * Merges a GitHub pull request
 * @param githubClient GitHub client
 * @param pullRequestNumber Pull request number
 * @param mergeOptions Merge options
 * @returns Pull request merge result
 */
export function mergeGithubPullRequest(
  githubClient: GithubClient,
  pullRequestNumber: number,
  mergeOptions?: Partial<GithubPullRequestMergeOptions>
): Observable<GithubPullRequestMergeResult> {
  const { octokit, owner, repo } = githubClient;
  const commit_title = mergeOptions?.automaticCommitTitle;
  const commit_message = mergeOptions?.automaticCommitMessage;
  const merge_method = mergeOptions?.mergeMethod;
  const pull_number = pullRequestNumber;
  const sha = mergeOptions?.pullRequestHeadSHA;
  return deferPromise(() =>
    octokit.pulls.merge({ owner, repo, pull_number, commit_message, commit_title, merge_method, sha })
  ).pipe(map(githubResponseToData));
}
