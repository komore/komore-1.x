import { createEventType } from '@komore/event';

import { neo4jDomain } from './neo4j.domain';

/**
 * Neo4j event
 */
export const neo4jEvent = createEventType(neo4jDomain, {});
