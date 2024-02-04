import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLConstantValueNode } from './graphql-constant-value-node';

/**
 * GraphQL constant list value node
 */
export interface GraphQLConstantListValueNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.ListValue;
  /**
   * Value
   */
  readonly value: ReadonlyArray<GraphQLConstantValueNode>;
}
