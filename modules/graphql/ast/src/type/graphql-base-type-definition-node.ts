import { type GraphQLConstantDirectiveNode } from '../directive/graphql-constant-directive-node';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNameNode } from '../name/graphql-name-node';
import { type GraphQLStringValueNode } from '../value/graphql-string-value-node';

/**
 * GraphQL base type definition node
 */
export interface GraphQLBaseTypeDefinitionNode extends GraphQLBaseAstNode {
  /**
   * Description
   */
  readonly description?: GraphQLStringValueNode;
  /**
   * Directives
   */
  readonly directives: ReadonlyArray<GraphQLConstantDirectiveNode>;
  /**
   * Name
   */
  readonly name: GraphQLNameNode;
}
