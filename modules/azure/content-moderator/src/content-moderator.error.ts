import { createErrorType } from '@komore/error';

import { contentModeratorDomain } from './content-moderator.domain';

/**
 * Content Moderator error
 */
export const contentModeratorError = createErrorType(contentModeratorDomain, {});
