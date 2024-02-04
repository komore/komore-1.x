import { type GraphQLDirectiveNode } from '../directive/graphql-directive-node';
import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNameNode } from '../name/graphql-name-node';
import { type GraphQLSelectionSetNode } from '../selection/graphql-selection-set-node';
import { type GraphQLVariableDefinitionNode } from '../variable/graphql-variable-definition-node';
import { type GraphQLOperationType } from './graphql-operation-type';

/**
 * GraphQL operation definition node
 */
export interface GraphQLOperationDefinitionNode extends GraphQLBaseAstNode {
  /**
   * Directives
   */
  readonly directives: ReadonlyArray<GraphQLDirectiveNode>;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.OperationDefinition;
  /**
   * Name
   */
  readonly name?: GraphQLNameNode;
  /**
   * Operation type
   */
  readonly operationType: GraphQLOperationType;
  /**
   * Selection set
   */
  readonly selectionSet: GraphQLSelectionSetNode;
  /**
   * Variable definitions
   */
  readonly variableDefinitions: ReadonlyArray<GraphQLVariableDefinitionNode>;
}
