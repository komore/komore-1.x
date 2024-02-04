import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNameNode } from '../name/graphql-name-node';

/**
 * GraphQL named type node
 */
export interface GraphQLNamedTypeNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.NamedType;
  /**
   * Name
   */
  readonly name: GraphQLNameNode;
}
