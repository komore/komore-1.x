import { type GraphQLArgumentNode } from '../argument/graphql-argument-node';
import { type GraphQLDirectiveNode } from '../directive/graphql-directive-node';
import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNameNode } from '../name/graphql-name-node';
import { type GraphQLNullabilityAssertionNode } from '../nullability/graphql-nullability-assertion-node';
import { type GraphQLSelectionSetNode } from '../selection/graphql-selection-set-node';

/**
 * GraphQL field node
 */
export interface GraphQLFieldNode extends GraphQLBaseAstNode {
  /**
   * Alias
   */
  readonly alias?: GraphQLNameNode;
  /**
   * Arguments
   */
  readonly arguments: ReadonlyArray<GraphQLArgumentNode>;
  /**
   * Directives
   */
  readonly directives: ReadonlyArray<GraphQLDirectiveNode>;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.Field;
  /**
   * Name
   */
  readonly name: GraphQLNameNode;
  /**
   * Nullability assertion
   */
  readonly nullabilityAssertion?: GraphQLNullabilityAssertionNode;
  /**
   * Selection set
   */
  readonly selectionSet?: GraphQLSelectionSetNode;
}
