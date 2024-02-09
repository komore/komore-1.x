import { createErrorType } from '@komore/error';
import { graphQLDomain } from '@komore/graphql';

/**
 * GraphQL parser error
 */
export const graphQLParserError = createErrorType(graphQLDomain, {});
