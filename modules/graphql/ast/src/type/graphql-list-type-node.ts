import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLTypeNode } from './graphql-type-node';

/**
 * GraphQL list type node
 */
export interface GraphQLListTypeNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.ListType;
  /**
   * Type
   */
  readonly type: GraphQLTypeNode;
}
