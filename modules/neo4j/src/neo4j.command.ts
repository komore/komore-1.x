import { createCommandType } from '@komore/command';

import { neo4jDomain } from './neo4j.domain';

/**
 * Neo4j command
 */
export const neo4jCommand = createCommandType(neo4jDomain, {});
