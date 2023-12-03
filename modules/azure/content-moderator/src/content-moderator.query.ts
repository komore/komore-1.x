import { createQueryType } from '@komore/query';

import { contentModeratorDomain } from './content-moderator.domain';

/**
 * Content Moderator query
 */
export const contentModeratorQuery = createQueryType(contentModeratorDomain, {});
