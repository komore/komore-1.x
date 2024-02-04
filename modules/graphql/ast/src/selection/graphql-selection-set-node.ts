import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLSelectionNode } from './graphql-selection-node';

/**
 * GraphQL selection set node
 */
export interface GraphQLSelectionSetNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.SelectionSet;
  /**
   * Selections
   */
  readonly selections: ReadonlyArray<GraphQLSelectionNode>;
}
