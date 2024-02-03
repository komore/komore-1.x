import { createErrorType, errorProperties } from '@komore/error';

import { gitHubDomain } from './github.domain';

/**
 * GitHub type error
 */
export const gitHubTypeError = createErrorType(gitHubDomain, {
  /**
   * Invalid GitHub node identifier
   */
  invalidGitHubNodeId: errorProperties<{
    /**
     * Node identifier
     */
    readonly nodeId: string;
  }>(),
});
