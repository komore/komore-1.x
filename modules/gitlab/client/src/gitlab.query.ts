import { gitLabDomain } from '@komore/gitlab';
import { createQueryType } from '@komore/query';

/**
 * GitLab query
 */
export const gitLabQuery = createQueryType(gitLabDomain, {});
