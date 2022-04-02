import { type Octokit } from '@octokit/rest';

/**
 * GitHub client options
 */
export interface GithubClientOptions extends OctokitOptions {
  readonly owner: string;
  readonly repo: string;
}

/**
 * Octokit options
 */
type OctokitOptions = NonNullable<ConstructorParameters<typeof Octokit>[0]>;
