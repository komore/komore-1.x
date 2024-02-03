import { gitHubDomain } from '@komore/github';
import { createQueryType } from '@komore/query';

/**
 * GitHub query
 */
export const gitHubQuery = createQueryType(gitHubDomain, {});
