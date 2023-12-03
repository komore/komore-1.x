import { createEventType } from '@komore/event';

import { contentModeratorDomain } from './content-moderator.domain';

/**
 * Content Moderator event
 */
export const contentModeratorEvent = createEventType(contentModeratorDomain, {});
