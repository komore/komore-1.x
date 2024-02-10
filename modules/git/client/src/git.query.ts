import { gitDomain } from '@komore/git';
import { createQueryType, queryProperties } from '@komore/query';

/**
 * Git query
 */
export const gitQuery = createQueryType(gitDomain, {
  /**
   * TODO
   *
   * @see {@link https://git-scm.com/docs/git-status git status}
   */
  status: queryProperties<unknown, unknown>(),
});
