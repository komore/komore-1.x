import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNameNode } from '../name/graphql-name-node';
import { type GraphQLConstantValueNode } from '../value/graphql-constant-value-node';

/**
 * GraphQL constant object field node
 */
export interface GraphQLConstantObjectFieldNode extends GraphQLBaseAstNode {
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
  readonly value: GraphQLConstantValueNode;
}
