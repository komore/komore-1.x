/**
 * GitHub namespaced branch name
 */
export type GitHubNamespacedBranchName = `${string}:${string}` & {
  readonly __tag_githubNamespacedBranchName: unique symbol;
};
