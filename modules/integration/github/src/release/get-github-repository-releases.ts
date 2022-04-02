import { deferPromise, map, type Observable } from '@komore/reactive';
import { type GithubClient } from '../github-client';
import { githubResponseToData } from '../github-response-to-data';
import { type GithubRepositoryRelease } from './github-repository-release';

export function getGithubRepositoryReleases(
  githubClient: GithubClient,
  page?: number,
  maxResults?: number
): Observable<ReadonlyArray<GithubRepositoryRelease>> {
  const { octokit, owner, repo } = githubClient;
  // TODO: handle paging with expand()
  return deferPromise(() => octokit.repos.listReleases({ owner, repo, page, per_page: maxResults })).pipe(
    map(githubResponseToData)
  );
}
