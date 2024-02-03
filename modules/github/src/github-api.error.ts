import { createErrorType } from '@komore/error';

import { gitHubDomain } from './github.domain';

/**
 * GitHub API error
 */
export const gitHubApiError = createErrorType(gitHubDomain, {});
