import { type GraphQLFieldDefinitionNode } from '../field/graphql-field-definition-node';
import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseTypeDefinitionNode } from './graphql-base-type-definition-node';
import { type GraphQLNamedTypeNode } from './graphql-named-type-node';

/**
 * GraphQL interface type definition node
 */
export interface GraphQLInterfaceTypeDefinitionNode extends GraphQLBaseTypeDefinitionNode {
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
  readonly kind: typeof graphQLAstNodeKinds.InterfaceTypeDefinition;
}
