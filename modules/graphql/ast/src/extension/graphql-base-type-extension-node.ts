import { type GraphQLConstantDirectiveNode } from '../directive/graphql-constant-directive-node';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNameNode } from '../name/graphql-name-node';
import { type GraphQLStringValueNode } from '../value/graphql-string-value-node';

/**
 * GraphQL base type extension node
 */
export interface GraphQLBaseTypeExtensionNode extends GraphQLBaseAstNode {
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
