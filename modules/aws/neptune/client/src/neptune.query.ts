import { neptuneDomain } from '@komore/aws/neptune';
import { createQueryType } from '@komore/query';

/**
 * Neptune query
 */
export const neptuneQuery = createQueryType(neptuneDomain, {});
