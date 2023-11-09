import { createErrorType } from '@komore/error';

import { cosmosDbDomain } from './cosmos-db.domain';

/**
 * Cosmos DB error
 */
export const cosmosDbError = createErrorType(cosmosDbDomain, {});
