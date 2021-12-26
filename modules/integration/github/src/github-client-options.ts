import { type Octokit } from '@octokit/rest';

type OctokitOptions = NonNullable<ConstructorParameters<typeof Octokit>[0]>;

/**
 * Github client options
 */
export interface GithubClientOptions extends OctokitOptions {
  readonly owner: string;
  readonly repo: string;
}
