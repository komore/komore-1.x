/**
 * DynamoDB event repository query placeholders
 */
export const dynamodbEventRepositoryQueryPlaceholders = {
  key: {
    name: '#k',
    value: ':k',
  },
  sequence: {
    end: ':se',
    name: '#s',
    start: ':ss',
  },
} as const;
