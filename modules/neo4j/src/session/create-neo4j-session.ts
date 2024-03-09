import { neo4jApiClientSymbol } from '../neo4j-api-client';
import { neo4jSessionSymbol, type Neo4jSession } from './neo4j-session';
import { type Neo4jSessionOptions } from './neo4j-session-options';

/**
 * Creates a Neo4j session
 *
 * @param sessionOptions Neo4j session options
 * @returns Neo4j session
 */
export function createNeo4jSession(sessionOptions: Neo4jSessionOptions): Neo4jSession {
  const {
    apiClient: { [neo4jApiClientSymbol]: driver },
  } = sessionOptions;
  const session = driver.rxSession();
  session.executeRead();
  return {
    [neo4jSessionSymbol]: session,
  };
}
