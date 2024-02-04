import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseTypeDefinitionNode } from '../type/graphql-base-type-definition-node';
import { type GraphQLEnumValueDefinitionNode } from './graphql-enum-value-definition-node';

/**
 * GraphQL enum type definition node
 */
export interface GraphQLEnumTypeDefinitionNode extends GraphQLBaseTypeDefinitionNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.EnumTypeDefinition;
  /**
   * Values
   */
  readonly values: ReadonlyArray<GraphQLEnumValueDefinitionNode>;
}
