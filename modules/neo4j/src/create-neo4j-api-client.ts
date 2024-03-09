import { auth, driver as createNeo4JDriver } from 'neo4j-driver';

import { neo4jApiClientSymbol, type Neo4jApiClient } from './neo4j-api-client';
import { type Neo4jApiClientOptions } from './neo4j-api-client-options';

/**
 * Creates a Neo4j API client
 *
 * @param clientOptions Neo4j API client options
 * @returns Neo4j API client
 */
export function createNeo4jApiClient(clientOptions: Neo4jApiClientOptions): Neo4jApiClient {
  const { credentials, databaseName, endpointUrl } = clientOptions;
  const { userName, password } = credentials;
  const url = endpointUrl.toString();
  const authToken = auth.basic(userName, password);
  const driver = createNeo4JDriver(url, authToken);
  return {
    databaseName,
    [neo4jApiClientSymbol]: driver,
  };
}
