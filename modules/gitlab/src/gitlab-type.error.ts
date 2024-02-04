import { createErrorType } from '@komore/error';

import { gitLabDomain } from './gitlab.domain';

/**
 * GitLab type error
 */
export const gitLabTypeError = createErrorType(gitLabDomain, {});
