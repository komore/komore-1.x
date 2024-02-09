import { createErrorType } from '@komore/error';
import { graphQLDomain } from '@komore/graphql';

/**
 * GraphQL lexer error
 */
export const graphQLLexerError = createErrorType(graphQLDomain, {});
