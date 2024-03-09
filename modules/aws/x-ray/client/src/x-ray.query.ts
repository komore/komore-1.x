import { xRayDomain } from '@komore/aws/x-ray';
import { createQueryType } from '@komore/query';

/**
 * X-Ray query
 */
export const xRayQuery = createQueryType(xRayDomain, {});
