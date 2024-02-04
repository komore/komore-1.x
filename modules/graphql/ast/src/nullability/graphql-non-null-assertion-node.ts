import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNullabilityAssertionNode } from './graphql-nullability-assertion-node';

/**
 * GraphQL non-null assertion node
 */
export interface GraphQLNonNullAssertionNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.NonNullAssertion;
  /**
   * Nullability assertion
   */
  readonly nullabilityAssertion?: GraphQLNullabilityAssertionNode;
}
