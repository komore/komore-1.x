import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLListTypeNode } from './graphql-list-type-node';
import { type GraphQLNamedTypeNode } from './graphql-named-type-node';

/**
 * GraphQL non-null type node
 */
export interface GraphQLNonNullTypeNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.NonNullType;
  /**
   * Type
   */
  readonly type: GraphQLNamedTypeNode | GraphQLListTypeNode;
}
