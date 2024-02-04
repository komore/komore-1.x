import { type GraphQLBaseTypeExtensionNode } from '../extension/graphql-base-type-extension-node';
import { type GraphQLFieldDefinitionNode } from '../field/graphql-field-definition-node';
import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLNamedTypeNode } from '../type/graphql-named-type-node';

/**
 * GraphQL object type extension node
 */
export interface GraphQLObjectTypeExtensionNode extends GraphQLBaseTypeExtensionNode {
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
  readonly kind: typeof graphQLAstNodeKinds.ObjectTypeExtension;
}
