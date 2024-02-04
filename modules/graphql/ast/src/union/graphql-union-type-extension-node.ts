import { type GraphQLBaseTypeExtensionNode } from '../extension/graphql-base-type-extension-node';
import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLNamedTypeNode } from '../type/graphql-named-type-node';

/**
 * GraphQL union type extension node
 */
export interface GraphQLUnionTypeExtensionNode extends GraphQLBaseTypeExtensionNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.UnionTypeExtension;
  /**
   * Values
   */
  readonly types: ReadonlyArray<GraphQLNamedTypeNode>;
}
