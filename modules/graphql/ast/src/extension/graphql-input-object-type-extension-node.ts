import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLInputValueDefinitionNode } from '../input/graphql-input-value-definition-node';
import { type GraphQLBaseTypeExtensionNode } from './graphql-base-type-extension-node';

/**
 * GraphQL input object type extension node
 */
export interface GraphQLInputObjectTypeExtensionNode extends GraphQLBaseTypeExtensionNode {
  /**
   * Fields
   */
  readonly fields: ReadonlyArray<GraphQLInputValueDefinitionNode>;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.InputObjectTypeExtension;
}
