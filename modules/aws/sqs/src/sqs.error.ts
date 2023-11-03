import { createErrorType } from '@komore/error';

import { sqsDomain } from './sqs.domain';

/**
 * SQS error
 */
export const sqsError = createErrorType(sqsDomain, {});
