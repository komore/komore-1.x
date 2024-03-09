import { createErrorType } from '@komore/error';

import { neo4jDomain } from './neo4j.domain';

/**
 * Neo4j error
 */
export const neo4jError = createErrorType(neo4jDomain, {});
