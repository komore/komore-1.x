import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseTypeDefinitionNode } from '../type/graphql-base-type-definition-node';

/**
 * GraphQL enum value definition node
 */
export interface GraphQLEnumValueDefinitionNode extends GraphQLBaseTypeDefinitionNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.EnumValueDefinition;
}
