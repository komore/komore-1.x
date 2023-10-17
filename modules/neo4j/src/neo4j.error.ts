import { createErrorGroup } from '@komore/error';

import { neo4jDomain } from './neo4j.domain';

/**
 * Neo4j error
 */
export const neo4jError = createErrorGroup(neo4jDomain, {});
