import { auroraDomain } from '@komore/aws/aurora';
import { createQueryType } from '@komore/query';

/**
 * Aurora query
 */
export const auroraQuery = createQueryType(auroraDomain, {});
