import { createErrorType } from '@komore/error';

import { dynamoDBDomain } from './dynamodb.domain';

/**
 * DynamoDB error
 */
export const dynamoDBError = createErrorType(dynamoDBDomain, {});
