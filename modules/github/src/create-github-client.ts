import { Octokit } from '@octokit/rest';

import { type GithubClient } from './github-client';
import { type GithubClientOptions } from './github-client-options';

/**
 * Creates a GitHub client
 *
 * @param options GitHub client options
 * @returns GitHub client
 */
export function createGithubClient(options: GithubClientOptions): GithubClient {
  const { owner, repo, ...octokitOptions } = options;
  const octokit = new Octokit(octokitOptions);
  return {
    octokit,
    owner,
    repo,
  };
}
