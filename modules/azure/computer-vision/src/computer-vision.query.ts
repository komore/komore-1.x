import { createQueryType } from '@komore/query';

import { computerVisionDomain } from './computer-vision.domain';

/**
 * Computer Vision query
 */
export const computerVisionQuery = createQueryType(computerVisionDomain, {});
