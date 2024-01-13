import { createErrorType } from '@komore/error';

import { gitHubDomain } from './github.domain';

/**
 * GitHub error
 */
export const gitHubError = createErrorType(gitHubDomain, {});
