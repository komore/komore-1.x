import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseTypeDefinitionNode } from './graphql-base-type-definition-node';

/**
 * GraphQL scalar type definition node
 */
export interface GraphQLScalarTypeDefinitionNode extends GraphQLBaseTypeDefinitionNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.ScalarTypeDefinition;
}
