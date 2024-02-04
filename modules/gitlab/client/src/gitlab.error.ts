import { createErrorType } from '@komore/error';

import { gitLabDomain } from '@komore/gitlab';

/**
 * GitLab error
 */
export const gitLabError = createErrorType(gitLabDomain, {});
