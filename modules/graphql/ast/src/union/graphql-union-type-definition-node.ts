import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseTypeDefinitionNode } from '../type/graphql-base-type-definition-node';
import { type GraphQLNamedTypeNode } from '../type/graphql-named-type-node';

/**
 * GraphQL union type definition node
 */
export interface GraphQLUnionTypeDefinitionNode extends GraphQLBaseTypeDefinitionNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.UnionTypeDefinition;
  /**
   * Values
   */
  readonly types: ReadonlyArray<GraphQLNamedTypeNode>;
}
