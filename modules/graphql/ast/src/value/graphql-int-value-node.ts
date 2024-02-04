import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';

/**
 * GraphQL integer value node
 */
export interface GraphQLIntValueNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.IntValue;
  /**
   * Value
   */
  readonly value: string;
}
