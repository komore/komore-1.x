/**
 * GitHub repository name
 */
export type GitHubRepositoryName = string & {
  readonly __tag_githubRepositoryName: unique symbol;
};
