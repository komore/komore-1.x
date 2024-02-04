import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNameNode } from '../name/graphql-name-node';

/**
 * GraphQL variable node
 */
export interface GraphQLVariableNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.Variable;
  /**
   * Name
   */
  readonly name: GraphQLNameNode;
}
