import { type GraphQLAstNodeLocation } from './graphql-ast-node-location';

/**
 * GraphQL base AST node
 */
export interface GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: string;
  /**
   * Node location
   */
  readonly location: GraphQLAstNodeLocation;
}
