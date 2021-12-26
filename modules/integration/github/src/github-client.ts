import { type Octokit } from '@octokit/rest';

/**
 * Github client
 */
export interface GithubClient {
  readonly octokit: Octokit;
  readonly owner: string;
  readonly repo: string;
}
