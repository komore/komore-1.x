import { createQueryType } from '@komore/query';

import { squareDomain } from './square.domain';

/**
 * Square query
 */
export const squareQuery = createQueryType(squareDomain, {});
