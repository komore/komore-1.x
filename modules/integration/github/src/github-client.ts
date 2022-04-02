import { type Octokit } from '@octokit/rest';

/**
 * GitHub client
 */
export interface GithubClient {
  readonly octokit: Octokit;
  readonly owner: string;
  readonly repo: string;
}
