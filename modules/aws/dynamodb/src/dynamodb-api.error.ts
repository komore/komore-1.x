import { createErrorType } from '@komore/error';

import { dynamoDBDomain } from './dynamodb.domain';

/**
 * DynamoDB API error
 */
export const dynamoDBApiError = createErrorType(dynamoDBDomain, {});
