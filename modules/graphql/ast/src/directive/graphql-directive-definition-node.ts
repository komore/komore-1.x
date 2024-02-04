import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLInputValueDefinitionNode } from '../input/graphql-input-value-definition-node';
import { type GraphQLNameNode } from '../name/graphql-name-node';
import { type GraphQLStringValueNode } from '../value/graphql-string-value-node';

/**
 * GraphQL directive definition node
 */
export interface GraphQLDirectiveDefinitionNode extends GraphQLBaseAstNode {
  /**
   * Arguments
   */
  readonly arguments: ReadonlyArray<GraphQLInputValueDefinitionNode>;
  /**
   * Description
   */
  readonly description?: GraphQLStringValueNode;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.DirectiveDefinition;
  /**
   * Locations
   */
  readonly locations: ReadonlyArray<GraphQLNameNode>;
  /**
   * Name
   */
  readonly name: GraphQLNameNode;
  /**
   * Whether the directive is repeatable
   */
  readonly repeatable: boolean;
}
