import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseTypeExtensionNode } from './graphql-base-type-extension-node';

/**
 * GraphQL scalar type extension node
 */
export interface GraphQLScalarTypeExtensionNode extends GraphQLBaseTypeExtensionNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.ScalarTypeExtension;
}
