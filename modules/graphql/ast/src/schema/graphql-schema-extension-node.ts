import { type GraphQLConstantDirectiveNode } from '../directive/graphql-constant-directive-node';
import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLOperationTypeDefinitionNode } from '../operation/graphql-operation-type-definition-node';

/**
 * GraphQL schema extension node
 */
export interface GraphQLSchemaExtensionNode extends GraphQLBaseAstNode {
  /**
   * Directives
   */
  readonly directives: ReadonlyArray<GraphQLConstantDirectiveNode>;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.SchemaExtension;
  /**
   * Operation types
   */
  readonly operationTypes: ReadonlyArray<GraphQLOperationTypeDefinitionNode>;
}
