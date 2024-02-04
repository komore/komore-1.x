import { type GraphQLFieldDefinitionNode } from '../field/graphql-field-definition-node';
import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLNamedTypeNode } from '../type/graphql-named-type-node';
import { type GraphQLBaseTypeExtensionNode } from './graphql-base-type-extension-node';

/**
 * GraphQL interface type extension node
 */
export interface GraphQLInterfaceTypeExtensionNode extends GraphQLBaseTypeExtensionNode {
  /**
   * Fields
   */
  readonly fields: ReadonlyArray<GraphQLFieldDefinitionNode>;
  /**
   * Interfaces
   */
  readonly interfaces: ReadonlyArray<GraphQLNamedTypeNode>;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.InterfaceTypeExtension;
}
