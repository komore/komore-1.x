import { auth, driver as createNeo4JDriver } from 'neo4j-driver';

import { type Neo4jClient } from './neo4j-client';
import { type Neo4jClientOptions } from './neo4j-client-options';

/**
 * Creates a Neo4j client
 *
 * @param options Neo4j client options
 * @returns Neo4j client
 */
export function createNeo4JClient(options: Neo4jClientOptions): Neo4jClient {
  const { apiEndpointUrl, credentials, databaseName, logger } = options;
  const { userName, password } = credentials;
  const url = apiEndpointUrl.toString();
  const authToken = auth.basic(userName, password);
  const driver = createNeo4JDriver(url, authToken);
  return {
    databaseName,
    driver,
    logger,
  };
}
