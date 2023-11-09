import { createQueryType } from '@komore/query';

import { cosmosDbDomain } from './cosmos-db.domain';

/**
 * Cosmos DB query
 */
export const cosmosDbQuery = createQueryType(cosmosDbDomain, {});
