import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNameNode } from '../name/graphql-name-node';
import { type GraphQLValueNode } from '../value/graphql-value-node';

/**
 * GraphQL object field node
 */
export interface GraphQLObjectFieldNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.ObjectField;
  /**
   * Name
   */
  readonly name: GraphQLNameNode;
  /**
   * Type
   */
  readonly value: GraphQLValueNode;
}
