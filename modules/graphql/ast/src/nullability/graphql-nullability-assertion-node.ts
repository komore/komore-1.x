import { type GraphQLErrorBoundaryNode } from './graphql-error-boundary-node';
import { type GraphQLListNullabilityOperatorNode } from './graphql-list-nullability-operator-node';
import { type GraphQLNonNullAssertionNode } from './graphql-non-null-assertion-node';

/**
 * GraphQL nullability assertion node
 */
export type GraphQLNullabilityAssertionNode =
  | GraphQLNonNullAssertionNode
  | GraphQLErrorBoundaryNode
  | GraphQLListNullabilityOperatorNode;
