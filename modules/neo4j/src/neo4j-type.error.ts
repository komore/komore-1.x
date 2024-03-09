import { createErrorType } from '@komore/error';

import { neo4jDomain } from './neo4j.domain';

/**
 * Neo4j type error
 */
export const neo4jTypeError = createErrorType(neo4jDomain, {});
