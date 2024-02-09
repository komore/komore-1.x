import { createErrorType } from '@komore/error';

import { gitDomain } from './git.domain';

/**
 * Git error
 */
export const gitError = createErrorType(gitDomain, {});
