import { type GithubClient } from '../github-client';
import { type GithubResponseDataType } from '../github-response-data-type';

/**
 * GitHub repository release
 */
export type GithubRepositoryRelease = GithubResponseDataType<
  ReturnType<GithubClient['octokit']['repos']['listReleases']>
>[0];
