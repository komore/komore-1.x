import { type GraphQLListTypeNode } from './graphql-list-type-node';
import { type GraphQLNamedTypeNode } from './graphql-named-type-node';
import { type GraphQLNonNullTypeNode } from './graphql-non-null-type-node';

/**
 * GraphQL type node
 */
export type GraphQLTypeNode = GraphQLNamedTypeNode | GraphQLListTypeNode | GraphQLNonNullTypeNode;
