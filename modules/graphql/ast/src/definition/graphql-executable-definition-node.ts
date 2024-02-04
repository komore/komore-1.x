import { type GraphQLOperationDefinitionNode } from '../operation/graphql-operation-definition-node';
import { type GraphQLFragmentDefinitionNode } from '../fragment/graphql-fragment-definition-node';

/**
 * GraphQL executable definition node
 */
export type GraphQLExecutableDefinitionNode = GraphQLOperationDefinitionNode | GraphQLFragmentDefinitionNode;
