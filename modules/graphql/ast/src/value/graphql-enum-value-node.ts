import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';

/**
 * GraphQL enum value node
 */
export interface GraphQLEnumValueNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.EnumValue;
  /**
   * Value
   */
  readonly value: string;
}
