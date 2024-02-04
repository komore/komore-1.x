import { type GraphQLConstantDirectiveNode } from '../directive/graphql-constant-directive-node';
import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLOperationTypeDefinitionNode } from '../operation/graphql-operation-type-definition-node';

/**
 * GraphQL schema definition node
 */
export interface GraphQLSchemaDefinitionNode extends GraphQLBaseAstNode {
  /**
   * Directives
   */
  readonly directives: ReadonlyArray<GraphQLConstantDirectiveNode>;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.SchemaDefinition;
  /**
   * Operation types
   */
  readonly operationTypes: ReadonlyArray<GraphQLOperationTypeDefinitionNode>;
}
