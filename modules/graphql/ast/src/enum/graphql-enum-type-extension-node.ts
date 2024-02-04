import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseTypeExtensionNode } from '../extension/graphql-base-type-extension-node';
import { type GraphQLEnumValueDefinitionNode } from './graphql-enum-value-definition-node';

/**
 * GraphQL enum type extension node
 */
export interface GraphQLEnumTypeExtensionNode extends GraphQLBaseTypeExtensionNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.EnumTypeExtension;
  /**
   * Values
   */
  readonly values: ReadonlyArray<GraphQLEnumValueDefinitionNode>;
}
