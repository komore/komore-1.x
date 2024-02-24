import { createErrorType } from '@komore/error';

import { sqsDomain } from './sqs.domain';

/**
 * SQS type error
 */
export const sqsTypeError = createErrorType(sqsDomain, {});
