import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNameNode } from '../name/graphql-name-node';
import { type GraphQLValueNode } from '../value/graphql-value-node';

/**
 * GraphQL argument node
 */
export interface GraphQLArgumentNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.Argument;
  /**
   * Name
   */
  readonly name: GraphQLNameNode;
  /**
   * Value
   */
  readonly value: GraphQLValueNode;
}
