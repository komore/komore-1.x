import { type GraphQLConstantArgumentNode } from '../argument/graphql-constant-argument-node';
import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNameNode } from '../name/graphql-name-node';

/**
 * GraphQL constant directive node
 */
export interface GraphQLConstantDirectiveNode extends GraphQLBaseAstNode {
  /**
   * Arguments
   */
  readonly arguments: ReadonlyArray<GraphQLConstantArgumentNode>;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.ConstantDirective;
  /**
   * Name
   */
  readonly name: GraphQLNameNode;
}
