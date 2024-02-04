import { type GraphQLSource } from './source/graphql-source';

/**
 * GraphQL AST node location
 */
export interface GraphQLAstNodeLocation {
  readonly end: number;
  readonly source: GraphQLSource;
  readonly start: number;
}
