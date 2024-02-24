import { sqsDomain } from '@komore/aws/sqs';
import { createErrorType } from '@komore/error';

/**
 * SQS error
 */
export const sqsError = createErrorType(sqsDomain, {});
