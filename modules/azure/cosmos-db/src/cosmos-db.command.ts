import { createCommandType } from '@komore/command';

import { cosmosDbDomain } from './cosmos-db.domain';

/**
 * Cosmos DB command
 */
export const cosmosDbCommand = createCommandType(cosmosDbDomain, {});
