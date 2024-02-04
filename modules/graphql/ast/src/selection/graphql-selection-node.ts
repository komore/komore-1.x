import { type GraphQLFieldNode } from '../field/graphql-field-node';
import { type GraphQLFragmentSpreadNode } from '../fragment/graphql-fragment-spread-node';
import { type GraphQLInlineFragmentNode } from '../fragment/graphql-inline-fragment-node';

/**
 * GraphQL selection node
 */
export type GraphQLSelectionNode = GraphQLFieldNode | GraphQLFragmentSpreadNode | GraphQLInlineFragmentNode;
