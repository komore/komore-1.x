import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLValueNode } from './graphql-value-node';

/**
 * GraphQL list value node
 */
export interface GraphQLListValueNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.ListValue;
  /**
   * Value
   */
  readonly value: ReadonlyArray<GraphQLValueNode>;
}
