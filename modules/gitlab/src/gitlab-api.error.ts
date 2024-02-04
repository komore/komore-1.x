import { createErrorType } from '@komore/error';

import { gitLabDomain } from './gitlab.domain';

/**
 * GitLab API error
 */
export const gitLabApiError = createErrorType(gitLabDomain, {});
