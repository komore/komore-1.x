import { createCommandType } from '@komore/command';

import { contentModeratorDomain } from './content-moderator.domain';

/**
 * Content Moderator command
 */
export const contentModeratorCommand = createCommandType(contentModeratorDomain, {});
