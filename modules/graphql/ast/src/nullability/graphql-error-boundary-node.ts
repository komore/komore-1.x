import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNullabilityAssertionNode } from './graphql-nullability-assertion-node';

/**
 * GraphQL error boundary node
 */
export interface GraphQLErrorBoundaryNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.ErrorBoundary;
  /**
   * Nullability assertion
   */
  readonly nullabilityAssertion?: GraphQLNullabilityAssertionNode;
}
