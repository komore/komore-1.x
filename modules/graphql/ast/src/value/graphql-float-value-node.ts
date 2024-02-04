import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';

/**
 * GraphQL floating-point value node
 */
export interface GraphQLFloatValueNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.FloatValue;
  /**
   * Value
   */
  readonly value: string;
}
