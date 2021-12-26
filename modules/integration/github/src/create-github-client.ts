import { Octokit } from '@octokit/rest';
import { type GithubClient } from './github-client';
import { type GithubClientOptions } from './github-client-options';

/**
 * Creates a Github client
 * @param options Github client options
 * @returns Github client
 */
export function createGithubClient(options: GithubClientOptions): GithubClient {
  const { owner, repo, ...octokitOptions } = options;
  const octokit = new Octokit(octokitOptions);
  return {
    octokit,
    owner,
    repo
  };
}
