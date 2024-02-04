import { type GraphQLSchemaExtensionNode } from '../schema/graphql-schema-extension-node';
import { type GraphQLTypeExtensionNode } from './graphql-type-extension-node';

/**
 * GraphQL type system extension node
 */
export type GraphQLTypeSystemExtensionNode = GraphQLSchemaExtensionNode | GraphQLTypeExtensionNode;
