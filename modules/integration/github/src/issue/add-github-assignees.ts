import { deferPromise, map, type Observable } from '@komore/reactive';
import { type GithubClient } from '../github-client';
import { githubResponseToData } from '../github-response-to-data';

/**
 * Adds assignees to a GitHub issue
 * @param githubClient GitHub client
 * @param issueNumber Issue number
 * @param assignees List of assignees
 * @returns TODO
 */
export function addGithubAssignees(
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
      assignees: [...assignees],
    })
  ).pipe(map(githubResponseToData));
}
