import { deferPromise, map, type Observable } from '@komore/reactive';
import { type GithubClient } from '../github-client';
import { toResponseData } from '../to-response-data';

/**
 * Adds assignees to an issue
 * @param githubClient Github client
 * @param issueNumber Issue number
 * @param assignees List of assignees
 * @returns TODO
 */
export function addAssignees(
  githubClient: GithubClient,
  issueNumber: number,
  assignees: ReadonlyArray<string>
): Observable<unknown> {
  const { octokit, owner, repo } = githubClient;
  const issue_number = issueNumber;
  return deferPromise(() =>
    octokit.issues.addAssignees({
      owner,
      repo,
      issue_number,
      assignees: [...assignees]
    })
  ).pipe(map(toResponseData));
}
