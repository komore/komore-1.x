import { createEventType } from '@komore/event';

import { cosmosDbDomain } from './cosmos-db.domain';

/**
 * Cosmos DB event
 */
export const cosmosDbEvent = createEventType(cosmosDbDomain, {});
