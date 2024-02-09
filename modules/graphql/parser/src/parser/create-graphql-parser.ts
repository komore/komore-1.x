import { createGraphQLLexer } from '../lexer/create-graphql-lexer';
import { type GraphQLParser } from './graphql-parser';
import { type GraphQLParserOptions } from './graphql-parser-options';

/**
 * Creates a GraphQL parser
 *
 * @param parserOptions GraphQL parser options
 * @returns GraphQL parser
 */
export function createGraphQLParser(parserOptions: GraphQLParserOptions): GraphQLParser {
  const lexer = createGraphQLLexer({});
}
