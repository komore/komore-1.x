import { type GraphQLDirectiveNode } from '../directive/graphql-directive-node';
import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNameNode } from '../name/graphql-name-node';

/**
 * GraphQL inline fragment node
 */
export interface GraphQLInlineFragmentNode extends GraphQLBaseAstNode {
  /**
   * Directives
   */
  readonly directives: ReadonlyArray<GraphQLDirectiveNode>;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.InlineFragment;
  /**
   * Name
   */
  readonly name: GraphQLNameNode;
}
