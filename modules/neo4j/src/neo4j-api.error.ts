import { createErrorType } from '@komore/error';

import { neo4jDomain } from './neo4j.domain';

/**
 * Neo4j API error
 */
export const neo4jApiError = createErrorType(neo4jDomain, {});
