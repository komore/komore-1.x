import { createErrorType, errorProperties } from '@komore/error';

import { gitDomain } from './git.domain';

/**
 * Git type error
 */
export const gitTypeError = createErrorType(gitDomain, {
  /**
   * Invalid branch name
   */
  invalidBranchName: errorProperties<{
    /**
     * Branch name
     */
    readonly branchName: string;
  }>(),
  /**
   * Invalid commit hash
   */
  invalidCommitHash: errorProperties<{
    /**
     * Commit hash
     */
    readonly commitHash: string;
  }>(),
  /**
   * Invalid tag name
   */
  invalidTagName: errorProperties<{
    /**
     * Tag name
     */
    readonly tagName: string;
  }>(),
});
