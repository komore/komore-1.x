import { createQueryType } from '@komore/query';

import { neo4jDomain } from './neo4j.domain';

/**
 * Neo4j query
 */
export const neo4jQuery = createQueryType(neo4jDomain, {});
