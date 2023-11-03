/**
 * DynamoDB event query placeholders
 */
export const dynamodbEventQueryPlaceholders = {
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
