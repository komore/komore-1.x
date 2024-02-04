import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNameNode } from '../name/graphql-name-node';
import { type GraphQLConstantValueNode } from '../value/graphql-constant-value-node';

/**
 * GraphQL constant argument node
 */
export interface GraphQLConstantArgumentNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.ConstantArgument;
  /**
   * Name
   */
  readonly name: GraphQLNameNode;
  /**
   * Value
   */
  readonly value: GraphQLConstantValueNode;
}
