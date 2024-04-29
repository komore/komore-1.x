import { comprehendDomain } from '@komore/aws/comprehend';
import { createQueryType } from '@komore/query';

/**
 * Comprehend query
 */
export const comprehendQuery = createQueryType(comprehendDomain, {});
