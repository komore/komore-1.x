import { deferPromise, map, type Observable } from '@komore/reactive';
import { type GithubClient } from '../github-client';
import { toResponseData } from '../to-response-data';
import { type PullRequestMergeOptions } from './pull-request-merge-options';
import { type PullRequestMergeResult } from './pull-request-merge-result';

/**
 * Merges a pull request
 * @param githubClient Github client
 * @param pullRequestNumber Pull request number
 * @param mergeOptions Merge options
 * @returns
 */
export function mergePullRequest(
  githubClient: GithubClient,
  pullRequestNumber: number,
  mergeOptions?: Partial<PullRequestMergeOptions>
): Observable<PullRequestMergeResult> {
  const { octokit, owner, repo } = githubClient;
  const commit_title = mergeOptions?.automaticCommitTitle;
  const commit_message = mergeOptions?.automaticCommitMessage;
  const merge_method = mergeOptions?.mergeMethod;
  const pull_number = pullRequestNumber;
  const sha = mergeOptions?.pullRequestHeadSHA;
  return deferPromise(() =>
    octokit.pulls.merge({ owner, repo, pull_number, commit_message, commit_title, merge_method, sha })
  ).pipe(map(toResponseData));
}
