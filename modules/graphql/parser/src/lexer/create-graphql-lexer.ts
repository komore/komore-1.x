import { ReplaySubject, endWith, startWith } from '@komore/reactive';

import { createStartOfFileGraphQLToken } from '../token/create-start-of-file-graphql-token';
import { createEndOfFileGraphQLToken } from '../token/create-end-of-file-graphql-token';
import { type GraphQLToken } from '../token/graphql-token';
import { type GraphQLLexer } from './graphql-lexer';
import { type GraphQLLexerOptions } from './graphql-lexer-options';

/**
 * Creates a GraphQL lexer
 *
 * @param lexerOptions GraphQL lexer options
 * @returns GraphQL lexer
 */
export function createGraphQLLexer(lexerOptions: GraphQLLexerOptions): GraphQLLexer {
  const {} = lexerOptions;
  return source => {
    console.log('gotta lex source', source);
    const tokens = new ReplaySubject<GraphQLToken>();

    return tokens
      .asObservable()
      .pipe(startWith(createStartOfFileGraphQLToken()), endWith(createEndOfFileGraphQLToken()));
  };
}

function readNextToken() {}
