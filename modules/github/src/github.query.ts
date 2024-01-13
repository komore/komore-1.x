import { createQueryType } from '@komore/query';

import { gitHubDomain } from './github.domain';

/**
 * GitHub query
 */
export const gitHubQuery = createQueryType(gitHubDomain, {});
