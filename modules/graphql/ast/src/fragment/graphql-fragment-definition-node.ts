import { type GraphQLDirectiveNode } from '../directive/graphql-directive-node';
import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNameNode } from '../name/graphql-name-node';
import { type GraphQLSelectionSetNode } from '../selection/graphql-selection-set-node';
import { type GraphQLNamedTypeNode } from '../type/graphql-named-type-node';

/**
 * GraphQL fragment definition node
 */
export interface GraphQLFragmentDefinitionNode extends GraphQLBaseAstNode {
  /**
   * Directives
   */
  readonly directives: ReadonlyArray<GraphQLDirectiveNode>;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.FragmentDefinition;
  /**
   * Name
   */
  readonly name: GraphQLNameNode;
  /**
   * Selection set
   */
  readonly selectionSet: GraphQLSelectionSetNode;
  /**
   * Type condition
   */
  readonly typeCondition: GraphQLNamedTypeNode;
}
