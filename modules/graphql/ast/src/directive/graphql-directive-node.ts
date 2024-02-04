import { type GraphQLArgumentNode } from '../argument/graphql-argument-node';
import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNameNode } from '../name/graphql-name-node';

/**
 * GraphQL directive node
 */
export interface GraphQLDirectiveNode extends GraphQLBaseAstNode {
  /**
   * Arguments
   */
  readonly arguments: ReadonlyArray<GraphQLArgumentNode>;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.Directive;
  /**
   * Name
   */
  readonly name: GraphQLNameNode;
}
