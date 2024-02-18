import { poetryDomain } from '@komore/poetry';
import { createQueryType } from '@komore/query';

/**
 * Poetry query
 */
export const poetryQuery = createQueryType(poetryDomain, {});
