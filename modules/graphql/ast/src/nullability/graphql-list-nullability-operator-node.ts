import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNullabilityAssertionNode } from './graphql-nullability-assertion-node';

/**
 * GraphQL list nullability operator node
 */
export interface GraphQLListNullabilityOperatorNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.ListNullabilityOpereator;
  /**
   * Nullability assertion
   */
  readonly nullabilityAssertion?: GraphQLNullabilityAssertionNode;
}
