import { type GraphQLFieldDefinitionNode } from '../field/graphql-field-definition-node';
import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseTypeDefinitionNode } from '../type/graphql-base-type-definition-node';
import { type GraphQLNamedTypeNode } from '../type/graphql-named-type-node';

/**
 * GraphQL object type definition node
 */
export interface GraphQLObjectTypeDefinitionNode extends GraphQLBaseTypeDefinitionNode {
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
  readonly kind: typeof graphQLAstNodeKinds.ObjectTypeDefinition;
}
