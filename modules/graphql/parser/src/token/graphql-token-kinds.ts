import { type ReadonlyRecord } from '@komore/typescript';

/**
 * GraphQL token kinds
 */
export const graphQLTokenKinds = {
  Ampersand: '&',
  At: '@',
  Bang: '!',
  BlockString: 'BlockString',
  Colon: ':',
  Comment: 'Comment',
  DollarSign: '$',
  EndOfFile: '<EOF>',
  Equal: '=',
  Float: 'Float',
  Int: 'Int',
  LeftBrace: '{',
  LeftBracket: '[',
  LeftParenthesis: '(',
  Name: 'Name',
  QuestionMark: '?',
  RightBrace: '}',
  RightBracket: ']',
  RightParenthesis: ')',
  Pipe: '|',
  Spread: '...',
  StartOfFile: '<SOF>',
  String: 'String',
} as const satisfies ReadonlyRecord<string, string>;
