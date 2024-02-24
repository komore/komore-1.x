import { createErrorType } from '@komore/error';

import { sqsDomain } from './sqs.domain';

/**
 * SQS API error
 */
export const sqsApiError = createErrorType(sqsDomain, {});
