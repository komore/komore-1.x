import { type RxSession } from 'neo4j-driver';

/**
 * Neo4j session
 */
export interface Neo4jSession {
  /**
   * Neo4j driver session
   */
  readonly [neo4jSessionSymbol]: RxSession;
}

/**
 * Neo4j session symbol
 *
 * @private
 */
export const neo4jSessionSymbol = Symbol('@komore/neo4j:session');
