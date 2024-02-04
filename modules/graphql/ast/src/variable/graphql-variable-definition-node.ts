import { type GraphQLConstantDirectiveNode } from '../directive/graphql-constant-directive-node';
import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLTypeNode } from '../type/graphql-type-node';
import { type GraphQLConstantValueNode } from '../value/graphql-constant-value-node';
import { type GraphQLVariableNode } from './graphql-variable-node';

/**
 * GraphQL variable definition node
 */
export interface GraphQLVariableDefinitionNode extends GraphQLBaseAstNode {
  /**
   * Default value
   */
  readonly defaultValue?: GraphQLConstantValueNode;
  /**
   * Directives
   */
  readonly directives: ReadonlyArray<GraphQLConstantDirectiveNode>;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.VariableDefinition;
  /**
   * Type
   */
  readonly type: GraphQLTypeNode;
  /**
   * Variable
   */
  readonly variable: GraphQLVariableNode;
}
