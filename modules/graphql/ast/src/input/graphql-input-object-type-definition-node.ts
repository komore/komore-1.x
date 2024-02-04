import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseTypeDefinitionNode } from '../type/graphql-base-type-definition-node';
import { type GraphQLInputValueDefinitionNode } from './graphql-input-value-definition-node';

/**
 * GraphQL input object type definition node
 */
export interface GraphQLInputObjectTypeDefinitionNode extends GraphQLBaseTypeDefinitionNode {
  /**
   * Fields
   */
  readonly fields: ReadonlyArray<GraphQLInputValueDefinitionNode>;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.InputObjectTypeDefinition;
}
