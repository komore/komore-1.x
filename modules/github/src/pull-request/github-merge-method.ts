import { type githubMergeMethods } from './github-merge-methods';

/**
 * GitHub merge method
 * @deprecated From REST API
 */
export type GithubMergeMethod = (typeof githubMergeMethods)[number];
