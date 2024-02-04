import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';

/**
 * GraphQL string value node
 */
export interface GraphQLStringValueNode extends GraphQLBaseAstNode {
  /**
   * Whether the string value is a block
   */
  readonly block: boolean;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.StringValue;
  /**
   * Value
   */
  readonly value: string;
}
