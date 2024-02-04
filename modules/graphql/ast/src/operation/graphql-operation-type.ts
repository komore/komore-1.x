import { type graphQLOperationTypes } from './graphql-operation-types';

/**
 * GraphQL operation type
 */
export type GraphQLOperationType = (typeof graphQLOperationTypes)[number];
